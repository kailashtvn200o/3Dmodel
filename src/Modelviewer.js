import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame,extend, useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls,PerspectiveCamera } from '@react-three/drei';

// extend({ OrbitControls });

function ModelViewer() {
  const gltfUrl = '/scene.gltf'; // Adjust the path to your GLTF model

  // Create a reference to the 3D model
  const modelRef = useRef();

  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, gltfUrl);
 

  return (
    <Canvas
      style={{ height: '100vh', width: '70vw' }}>
      {/* Camera with OrbitControls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.5}
        target={[100, 70, 50]} // Set the target point to look at
      />
      <PerspectiveCamera
        makeDefault
        position={[100, 80,10]}
        fov={30}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Add the loaded model */}
      <group ref={modelRef}>
        <primitive 
        object={gltf.scene} 
        ref={modelRef}
        position={[100,0,0]}
        />

      </group>
    </Canvas>
  );
}

export default ModelViewer;