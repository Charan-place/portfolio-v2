"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function DistortSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.elapsedTime * 0.2;
    ref.current.rotation.y = clock.elapsedTime * 0.15;
  });
  return (
    <Sphere ref={ref} args={[1.4, 80, 80]}>
      <MeshDistortMaterial
        color="#7c3aed"
        attach="material"
        distort={0.45}
        speed={2.5}
        roughness={0}
        metalness={0.2}
        emissive="#3b0764"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
}

function InnerSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = -clock.elapsedTime * 0.3;
    ref.current.rotation.z = clock.elapsedTime * 0.2;
  });
  return (
    <Sphere ref={ref} args={[1.0, 60, 60]}>
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.6}
        speed={3}
        roughness={0}
        metalness={0.5}
        emissive="#0e7490"
        emissiveIntensity={0.3}
        transparent
        opacity={0.7}
      />
    </Sphere>
  );
}

export default function FloatingOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#7c3aed" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#06b6d4" />
      <DistortSphere />
      <InnerSphere />
    </Canvas>
  );
}
