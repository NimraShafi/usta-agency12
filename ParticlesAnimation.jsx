import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

const Particles = () => {
  const particlesRef = useRef();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('../public/models/Rocket.fbx', (object) => {
      const positionsArray = [];

      object.traverse((child) => {
        if (child.isMesh) {
          const positionAttr = child.geometry.attributes.position;
          const array = positionAttr.array;

          for (let i = 0; i < array.length; i += 3) {
            const x = array[i];
            const y = array[i + 1];
            const z = array[i + 2];
            const randomX = x + (Math.random() - 0.5) * 0.1;
            const randomY = y + (Math.random() - 0.5) * 0.1;
            const randomZ = z + (Math.random() - 0.5) * 0.1;

            positionsArray.push(randomX, randomY, randomZ);
          }
        }
      });

      setPositions(positionsArray);
    });
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positionFloat32Array = new Float32Array(positions);
    geom.setAttribute('position', new THREE.BufferAttribute(positionFloat32Array, 3));
    return geom;
  }, [positions]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01; // Animate rotation for demonstration
    }
  });

  return (
    positions.length > 0 && (
      <points ref={particlesRef} geometry={geometry}>
        <pointsMaterial size={0.01} color={0xffffff} />
      </points>
    )
  );
};

const ParticleScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles />
    </Canvas>
  );
};

export default ParticleScene;
