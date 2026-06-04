"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import type { WINGS } from "../../_internal/data/navigation";

export const renderPolaroid = (wing: (typeof WINGS)[0]) => (
  <div className="relative aspect-3/4 w-full overflow-hidden bg-[#e0ded8] p-4 pb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
    <div className="h-full w-full bg-[#1a1a1a] shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]" />
    <p className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 text-center font-display text-xl font-bold italic text-black/80">
      {wing.title}
    </p>
  </div>
);

export const WireframeComponent = () => {
  const [text, setText] = useState("");
  const fullText =
    "function buildFuture() {\n  const abstract = true;\n  while(abstract) {\n    explore();\n    create();\n  }\n}";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length + 10) i = 0; // Pause at the end before looping
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border border-green-500/30 bg-black shadow-[0_0_40px_rgba(34,197,94,0.3)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-size-[20px_20px]" />
      <div className="z-10 flex h-full w-full flex-col justify-center p-6 text-left">
        <pre className="whitespace-pre-wrap font-mono text-sm font-bold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] md:text-lg">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </div>
  );
};

export const renderVinyl = (wing: (typeof WINGS)[0]) => (
  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-full border-4 border-zinc-800 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-[spin_4s_linear_infinite]">
    <div className="absolute inset-2 rounded-full border border-zinc-800/50" />
    <div className="absolute inset-4 rounded-full border border-zinc-800/50" />
    <div className="absolute inset-8 rounded-full border border-zinc-800/50" />
    <div className="absolute inset-16 rounded-full border border-zinc-800/50" />
    <div className="absolute inset-24 rounded-full border border-zinc-800/50" />
    <div
      className="z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full shadow-2xl md:h-32 md:w-32"
      style={{ backgroundColor: wing.accentColor }}
    >
      <div className="h-4 w-4 rounded-full bg-black shadow-[inset_0_0_4px_rgba(255,255,255,0.5)]" />
      <span className="mt-2 text-[8px] font-bold uppercase text-black/70 md:text-[10px]">
        {wing.title}
      </span>
    </div>
  </div>
);

// --- THREEJS COMPONENT: GAMING PC ---
export const GamingPCThreeJSComponent = () => {
  return (
    <div className="relative aspect-square w-full min-h-[300px] max-w-[400px]">
      <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
        <ambientLight intensity={0.2} />
        {/* Neon Accent Lights */}
        <pointLight
          position={[0, 2, 2]}
          intensity={50}
          color="#f15bb5"
          distance={10}
        />
        <pointLight
          position={[2, 0, 2]}
          intensity={30}
          color="#00f5d4"
          distance={10}
        />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
          <group position={[-0.5, -0.5, 0]}>
            {/* Monitor Back / Chassis */}
            <mesh position={[0, 1.8, 0]}>
              <boxGeometry args={[3.8, 2.4, 0.2]} />
              <meshStandardMaterial color="#111111" roughness={0.8} />
            </mesh>

            {/* Monitor Screen (Glowing) */}
            <mesh position={[0, 1.8, 0.11]}>
              <boxGeometry args={[3.6, 2.2, 0.05]} />
              <meshStandardMaterial
                color="#f15bb5"
                emissive="#f15bb5"
                emissiveIntensity={1}
              />
            </mesh>

            {/* Monitor Stand neck */}
            <mesh position={[0, 0.8, -0.1]}>
              <boxGeometry args={[0.4, 1.2, 0.2]} />
              <meshStandardMaterial color="#222222" />
            </mesh>

            {/* Monitor Stand base */}
            <mesh position={[0, 0.2, -0.1]}>
              <boxGeometry args={[1.5, 0.1, 1]} />
              <meshStandardMaterial color="#333333" metalness={0.5} />
            </mesh>

            {/* PC Case (Thùng máy) */}
            <group position={[3.2, 1.2, 0]}>
              <mesh>
                <boxGeometry args={[1.4, 3, 2.5]} />
                <meshStandardMaterial color="#111" />
              </mesh>
              <mesh position={[0, 0, 1.26]}>
                <boxGeometry args={[1.2, 2.8, 0.05]} />
                <meshStandardMaterial
                  color="#00f5d4"
                  emissive="#00f5d4"
                  emissiveIntensity={1.5}
                  wireframe
                />
              </mesh>
            </group>

            {/* RGB Keyboard */}
            <mesh position={[0, 0.2, 1.5]} rotation={[-0.1, 0, 0]}>
              <boxGeometry args={[2.5, 0.1, 0.8]} />
              <meshStandardMaterial
                color="#000000"
                emissive="#00f5d4"
                emissiveIntensity={1}
                wireframe
              />
            </mesh>

            {/* Glowing Mouse */}
            <mesh position={[1.8, 0.2, 1.5]}>
              <boxGeometry args={[0.3, 0.15, 0.5]} />
              <meshStandardMaterial
                color="#1a1a1a"
                emissive="#f15bb5"
                emissiveIntensity={0.5}
              />
            </mesh>

            {/* Mousepad */}
            <mesh position={[1.8, 0.15, 1.5]}>
              <boxGeometry args={[0.8, 0.02, 0.8]} />
              <meshStandardMaterial color="#0a0a0a" />
            </mesh>
          </group>
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export const getArtifactRenderer = (slug: string) => {
  switch (slug) {
    case "life":
      return renderPolaroid;
    case "work":
      return (wing: (typeof WINGS)[0]) => <WireframeComponent />;
    case "music":
      return renderVinyl;
    case "gaming":
      return (wing: (typeof WINGS)[0]) => <GamingPCThreeJSComponent />;
    default:
      return renderPolaroid;
  }
};

// --- THREEJS COMPONENT: WORK/CODE ---
export const WorkThreeJSGeometry = () => {
  return (
    <div className="h-full w-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
          <mesh>
            <icosahedronGeometry args={[2.5, 0]} />
            <meshStandardMaterial
              color="#22c55e"
              wireframe
              wireframeLinewidth={2}
            />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="#000000"
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
        </Float>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
