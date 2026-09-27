import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FlagMesh = () => {
  const mesh = useRef();
  const [texture, setTexture] = useState(null);

  // Fallback canvas texture (Ashoka Chakra)
  const fallbackTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF9933'; ctx.fillRect(0, 0, 2048, 341);
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 341, 2048, 342);
    ctx.fillStyle = '#138808'; ctx.fillRect(0, 683, 2048, 341);
    ctx.beginPath();
    ctx.arc(1024, 512, 128, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000080'; ctx.lineWidth = 10; ctx.stroke();
    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24;
      ctx.beginPath();
      ctx.moveTo(1024, 512);
      ctx.lineTo(1024 + 128 * Math.cos(angle), 512 + 128 * Math.sin(angle));
      ctx.strokeStyle = '#000080'; ctx.lineWidth = 4; ctx.stroke();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    // Using high-res texture downloaded to cover the whole background cleanly
    loader.load(
      '/assets/indian_flag_highres.png',
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.warn('Failed to load high-res flag texture, using fallback.', err);
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
      // Slower, more elegant, full-cloth wave (Silk effect)
      const wave1 = 1.2 * Math.sin(x * 0.15 - time * 1.0);
      const wave2 = 0.8 * Math.sin(y * 0.2 - time * 0.8);
      const wave3 = 0.4 * Math.sin((x + y) * 0.2 - time * 1.2);
      positions.setZ(i, wave1 + wave2 + wave3);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-0.1, 0, 0]} position={[0, 0, -10]}>
      {/* Massive geometry to cover entire background. 100x60 units. 80x50 segments. */}
      <planeGeometry args={[100, 60, 80, 50]} />
      <meshStandardMaterial 
        map={texture || fallbackTexture} 
        side={THREE.DoubleSide} 
        roughness={0.7} 
        metalness={0.15} 
      />
    </mesh>
  );
};

export const ThreeFlag = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* 3D Canvas filling the background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[-10, 20, 10]} intensity={2.5} castShadow />
          <directionalLight position={[10, -10, -10]} intensity={1.0} />
          <FlagMesh />
        </Canvas>
      </div>

      {/* Deep blue gradient overlay to blend it perfectly with text and give premium SaaS feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-950/70 to-slate-900/90" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-blue-900/20" style={{ zIndex: 1 }} />
    </div>
  );
};
