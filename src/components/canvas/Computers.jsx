import React from 'react';
import { Suspense } from 'react';
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// Computers Component
const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15}
        groundColor='black'
      />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

// ComputerCanvas Component
const ComputerCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default Computers;
