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
      // Sweeping, majestic cloth wave (scaled for wider view)
      const wave1 = 1.8 * Math.sin(x * 0.1 - time * 0.8);
      const wave2 = 1.0 * Math.sin(y * 0.15 - time * 0.6);
      const wave3 = 0.5 * Math.sin((x + y) * 0.1 - time * 1.0);
      positions.setZ(i, wave1 + wave2 + wave3);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-0.05, 0, 0]} position={[0, 0, 0]}>
      {/* 90x60 is exactly 3:2 aspect ratio, matches flag perfectly */}
      <planeGeometry args={[90, 60, 64, 48]} />
      <meshStandardMaterial 
        map={texture || fallbackTexture} 
        side={THREE.DoubleSide} 
        roughness={0.6} 
        metalness={0.1} 
      />
    </mesh>
  );
};

export const ThreeFlag = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* 3D Canvas filling the background */}
      <div className="absolute inset-0">
        {/* Pulled camera back to Z=35 to reveal Saffron and Green bands! */}
        <Canvas camera={{ position: [0, 0, 35], fov: 45 }}>
          <ambientLight intensity={1.8} />
          <directionalLight position={[-10, 20, 15]} intensity={3.0} castShadow />
          <directionalLight position={[10, -10, -10]} intensity={1.5} />
          <FlagMesh />
        </Canvas>
      </div>

      {/* Elegant vignette overlay: Dark edges for text readability, clear center to show flag colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/10 to-slate-950/90" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/60" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-slate-900/40" style={{ zIndex: 1 }} />
    </div>
  );
};
