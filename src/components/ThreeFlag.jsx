import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FlagMesh = () => {
  const mesh = useRef();
  const [texture, setTexture] = useState(null);

  // Fallback canvas texture (Ashoka Chakra)
  const fallbackTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF9933'; ctx.fillRect(0, 0, 1024, 171);
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 171, 1024, 170);
    ctx.fillStyle = '#138808'; ctx.fillRect(0, 341, 1024, 171);
    ctx.beginPath();
    ctx.arc(512, 256, 64, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000080'; ctx.lineWidth = 5; ctx.stroke();
    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24;
      ctx.beginPath();
      ctx.moveTo(512, 256);
      ctx.lineTo(512 + 64 * Math.cos(angle), 256 + 64 * Math.sin(angle));
      ctx.strokeStyle = '#000080'; ctx.lineWidth = 2; ctx.stroke();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      '/assets/indian_flag.png',
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.warn('Failed to load flag texture, using fallback.', err);
      }
    );
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const positions = mesh.current.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const wave1 = 0.4 * Math.sin(x * 1.2 - time * 4.0);
      const wave2 = 0.15 * Math.sin(x * 2.5 - time * 5.5);
      const wave3 = 0.1 * Math.sin(y * 1.5 - time * 2.0);
      const multiplier = Math.max(0, (x + 8) / 16);
      positions.setZ(i, (wave1 + wave2 + wave3) * multiplier * 1.5);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[0.1, -0.3, 0.05]} position={[2, 0, -3]}>
      {/* Reduced segments from 128x128 to 64x64 to prevent mobile freezing */}
      <planeGeometry args={[16, 10, 64, 64]} />
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
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Dark blue gradient background always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

      {/* 3D Canvas on top of background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[-5, 10, 5]} intensity={2.5} />
          <directionalLight position={[5, -5, -5]} intensity={0.5} />
          <FlagMesh />
        </Canvas>
      </div>

      {/* 30% blue overlay for text readability */}
      <div className="absolute inset-0 bg-blue-900/30" style={{ zIndex: 1 }} />
    </div>
  );
};
