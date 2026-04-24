"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function OuterShell() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.elapsedTime * 0.15;
    ref.current.rotation.y = clock.elapsedTime * 0.1;
  });
  return (
    <Sphere ref={ref} args={[1.35, 64, 64]}>
      <MeshDistortMaterial
        color="#7c3aed"
        distort={0.35}
        speed={1.8}
        roughness={0.1}
        metalness={0.3}
        transparent
        opacity={0.18}
        wireframe={false}
        emissive="#7c3aed"
        emissiveIntensity={0.6}
      />
    </Sphere>
  );
}

function InnerGlow() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = -clock.elapsedTime * 0.25;
    ref.current.rotation.z = clock.elapsedTime * 0.18;
  });
  return (
    <Sphere ref={ref} args={[0.9, 48, 48]}>
      <MeshDistortMaterial
        color="#06b6d4"
        distort={0.55}
        speed={2.5}
        roughness={0}
        metalness={0.6}
        transparent
        opacity={0.22}
        emissive="#06b6d4"
        emissiveIntensity={0.8}
      />
    </Sphere>
  );
}

function CoreSpark() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.5;
    ref.current.rotation.x = clock.elapsedTime * 0.3;
    const s = 0.45 + Math.sin(clock.elapsedTime * 2) * 0.05;
    ref.current.scale.set(s, s, s);
  });
  return (
    <Sphere ref={ref} args={[1, 32, 32]}>
      <meshBasicMaterial color="#c4b5fd" transparent opacity={0.55} wireframe />
    </Sphere>
  );
}

function OrbitRing({ rotX, rotZ, color, opacity }: { rotX: number; rotZ: number; color: string; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.3;
  });
  return (
    <Torus ref={ref} args={[1.6, 0.006, 16, 120]} rotation={[rotX, 0, rotZ]}>
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </Torus>
  );
}

export default function FloatingOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 3]} intensity={3} color="#7c3aed" />
      <pointLight position={[-3, -3, 2]} intensity={2} color="#06b6d4" />
      <pointLight position={[0, 0, 4]} intensity={1} color="#ffffff" />
      <OuterShell />
      <InnerGlow />
      <CoreSpark />
      <OrbitRing rotX={Math.PI / 2} rotZ={0.3} color="#7c3aed" opacity={0.5} />
      <OrbitRing rotX={0.4} rotZ={Math.PI / 3} color="#06b6d4" opacity={0.35} />
      <OrbitRing rotX={Math.PI / 4} rotZ={Math.PI / 4} color="#f59e0b" opacity={0.2} />
    </Canvas>
  );
}
