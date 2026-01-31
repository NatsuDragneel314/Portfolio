import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import Loader from "./Loader";


function HollowKnight() {
  const { scene } = useGLTF("/assets/3d/hollow_knight.glb");
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(-1);

  useFrame(() => {
    if (ref.current) {
      // Smooth rotation animation
      ref.current.rotation.y += (targetRotation - ref.current.rotation.y) * 0.1;
      
      // Gentle bobbing when hovered
      if (hovered) {
        ref.current.position.y = -3 + Math.sin(Date.now() * 0.002) * 0.2;
      } else {
        ref.current.position.y += (-3 - ref.current.position.y) * 0.1;
      }
    }
  });

  const handleClick = () => {
    // Rotate 360 degrees on each click
    setTargetRotation(targetRotation + Math.PI * 2);
  };

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[15, 15, 15]}
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

  return (
    <div 
      className="absolute bottom-0 z-50 w-full h-96 transition-opacity duration-1000" 
      style={{ pointerEvents: 'auto', opacity: isLoaded ? 1 : 0 }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 70], fov: 20, near: 0.1, far: 500 }}
        gl={{ alpha: true }}
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
