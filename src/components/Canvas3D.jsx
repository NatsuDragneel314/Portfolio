import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Hollowknight from '../models/hollow_knight.jsx';
import Loader from './Loader.jsx';
import { useLocation } from 'react-router-dom';

const Canvas3D = () => {
  const hollowRef = useRef();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/' || location.hash === '#home') {
      console.log('Show skills!');
    }
  };

  const adjustForScreen = () => {
    const scale = window.innerWidth < 768 ? [10, 10, 10] : [60, 60, 60];
    const position = [0, -8, -43];
    const rotation = [0.1, 5.2, 0];
    return [scale, position, rotation];
  };
  const [scale, position, rotation] = adjustForScreen();

  return (
    <Canvas
      className="absolute bottom-[-480px] left-1/2 -translate-x-1/2 pointer-events-none z-50 w-full h-96"
      camera={{ position: [0, 1.5, 70], fov: 20, near: 0.1, far: 500 }}
      
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 50, 20]} angle={0.4} penumbra={0.6} intensity={5} />
        <directionalLight position={[-10, 10, 10]} intensity={1} />
        <hemisphereLight skyColor={0xbfd1e5} groundColor={0x202020} intensity={0.6} />

        <group
          ref={hollowRef}
          scale={scale}
          position={position}
          rotation={rotation}
          onClick={location.hash === '#home' ? handleClick : null}
          pointerEvents={location.hash === '#home' ? 'auto' : 'none'}
        >
          <Hollowknight />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;