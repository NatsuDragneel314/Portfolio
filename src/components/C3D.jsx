import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import Loader from "./Loader";


function HollowKnight() {
  const { scene } = useGLTF("/assets/3d/hollow_knight.glb");
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(-1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Smooth rotation animation - only update if difference is significant
    const rotDiff = targetRotation - ref.current.rotation.y;
    if (Math.abs(rotDiff) > 0.001) {
      ref.current.rotation.y += rotDiff * 0.1;
    }
    
    // Gentle bobbing when hovered
    const targetY = hovered ? -3 + Math.sin(state.clock.elapsedTime * 2) * 0.2 : -3;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.1;
  });

  const handleClick = () => {
    // Rotate 360 degrees on each click
    setTargetRotation(targetRotation + Math.PI * 2);
  };

  const scale = isMobile ? 10 : 15;

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[scale, scale, scale]}
      position={[0, -3, 0]}
      rotation={[0, -1, 0]}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      style={{ cursor: hovered ? 'pointer' : 'auto' }}
    />
  );
}

// Preload the model
useGLTF.preload("/assets/3d/hollow_knight.glb");

export default function C3D() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="absolute bottom-0 z-50 w-full h-96 transition-opacity duration-1000" 
      style={{ pointerEvents: 'auto', opacity: isLoaded ? 1 : 0 }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 70], fov: 20, near: 0.1, far: 500 }}
        gl={{ 
          alpha: true,
          antialias: !isMobile,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        dpr={isMobile ? 1 : 1.5}
        onCreated={() => setIsLoaded(true)}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<Loader />}>
          <HollowKnight />
        </Suspense>
      </Canvas>
    </div>
  );
}
