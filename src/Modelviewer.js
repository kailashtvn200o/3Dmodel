import React, { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import {Model} from './public/scene.gltf'
function ModelViewer() {
  // Reference to the 3D model
  const modelRef = useRef();

  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, {Model});

  return (
    <Canvas>
      {/* Camera */}
      <perspectiveCamera
        position={[0, 0, 5]}
        fov={60}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Add the loaded model */}
      <group ref={modelRef}>
        <primitive object={gltf.scene} />
      </group>
    </Canvas>
  );
}

export default ModelViewer;
