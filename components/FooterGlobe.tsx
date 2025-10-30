"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function fibonacciSphere(count: number): Float32Array {
  const points = new Float32Array(count * 3);
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    points[i * 3] = Math.cos(theta) * Math.sin(phi);
    points[i * 3 + 1] = Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = Math.cos(phi);
  }
  return points;
}

function GlobePoints() {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Points>(null!);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
    if (meshRef.current) meshRef.current.rotation.x += delta * 0.05;
  });
  const particleCount = 800;
  const positions = fibonacciSphere(particleCount);
  const colors = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    colors[i * 3] = 0.9 + Math.random() * 0.1;
    colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
    colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
  }
  return (
    <group ref={groupRef}>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function FooterGlobe({ width = 400, height = 400, className = "" }: { width?: number; height?: number; className?: string }) {
  return (
    <div style={{ width, height }} className={className}>
      <Canvas
        camera={{ fov: 35, position: [0, 0, 3.5] }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 4]} intensity={0.8} />
        <GlobePoints />
      </Canvas>
    </div>
  );
}
