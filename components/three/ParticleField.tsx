"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Galaxy() {
  const ref = useRef<THREE.Points>(null!);
  const count = 6000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#7c3aed"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#f59e0b"),
      new THREE.Color("#ec4899"),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 8 + 1;
      const spinAngle = radius * 1.2;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      const rand = (Math.random() - 0.5) * Math.pow(Math.random(), 3) * 3;
      const randY = (Math.random() - 0.5) * Math.pow(Math.random(), 3) * 1.5;
      const randZ = (Math.random() - 0.5) * Math.pow(Math.random(), 3) * 3;

      pos[i3]     = Math.cos(branchAngle + spinAngle) * radius + rand;
      pos[i3 + 1] = randY;
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randZ;

      const color = palette[Math.floor(Math.random() * palette.length)].clone();
      color.lerp(new THREE.Color("#ffffff"), Math.random() * 0.3);
      col[i3] = color.r; col[i3+1] = color.g; col[i3+2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.elapsedTime * 0.3;
    ref.current.rotation.z = clock.elapsedTime * 0.15;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.4;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.5, 0.015, 16, 180]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.35} />
    </mesh>
  );
}

function FloatingRing2() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.2;
    ref.current.rotation.x = clock.elapsedTime * 0.4;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[5, 0.01, 16, 180]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      dpr={[1, 1.5]}
    >
      <Galaxy />
      <FloatingRing />
      <FloatingRing2 />
    </Canvas>
  );
}
