import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei';

function DistortedBlob() {
  const meshRef = useRef(null);
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#4f7cff"
          emissive="#38e0ff"
          emissiveIntensity={0.15}
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={40} color="#9b5cff" />
        <pointLight position={[-3, -2, -2]} intensity={25} color="#38e0ff" />
        <DistortedBlob />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
