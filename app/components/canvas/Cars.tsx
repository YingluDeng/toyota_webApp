'use client';

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Cars = () => {
  const car = useGLTF("./toyota_gr_supra/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* red light */}
      <spotLight
        position={[250, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color={0xecad9e}
      />
      <pointLight intensity={1} />

      {/* green light  */}
      <spotLight
        position={[-70, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color={0xd6d587}
      />
      <pointLight intensity={1} />
      <primitive
        object={car.scene}
        scale={2.5}
        position={[1, -2, 0]}
        rotation={[0.06, -0.11, -0.05]}
      />
    </mesh>
  );
};

const CarsCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cars />
        {/* <Car isMobile={isMobile} /> */}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CarsCanvas;