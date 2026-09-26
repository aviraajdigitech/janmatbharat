import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const FlagMesh = () => {
  const mesh = useRef();
  
  // Create a fallback texture in case the image fails to load
  const fallbackTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF9933'; ctx.fillRect(0, 0, 1024, 170);
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 170, 1024, 170);
    ctx.fillStyle = '#138808'; ctx.fillRect(0, 340, 1024, 170);
    ctx.beginPath();
    ctx.arc(512, 256, 60, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000080'; ctx.lineWidth = 4; ctx.stroke();
    return new THREE.CanvasTexture(canvas);
  }, []);

  let texture;
  try {
    // Attempt to load the downloaded Indian flag
    texture = useLoader(THREE.TextureLoader, '/assets/indian_flag.png');
  } catch (e) {
    texture = fallbackTexture;
  }

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const positions = mesh.current.geometry.attributes.position;
    
    // Create an ultra-realistic cloth waving effect
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Complex multi-sine waves for wind physics
      const wave1 = 0.4 * Math.sin(x * 1.2 - time * 4.0);
      const wave2 = 0.15 * Math.sin(x * 2.5 - time * 5.5);
      const wave3 = 0.1 * Math.sin(y * 1.5 - time * 2.0);
      
      // Pin the left edge (x = -8), free blowing right edge (x = +8)
      // Normalizing x from -8 to 8 into 0 to 1
      const multiplier = Math.max(0, (x + 8) / 16); 
      
      const wave = (wave1 + wave2 + wave3) * multiplier * 1.5;
      positions.setZ(i, wave);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[0.1, -0.3, 0.05]} position={[2, 0, -3]}>
      <planeGeometry args={[16, 10, 128, 128]} />
      <meshStandardMaterial 
        map={texture || fallbackTexture} 
        side={THREE.DoubleSide} 
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
};

export const ThreeFlag = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden opacity-100">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[-5, 10, 5]} intensity={2.5} castShadow />
        <directionalLight position={[5, -5, -5]} intensity={0.5} />
        <FlagMesh />
      </Canvas>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
    </div>
  );
};
