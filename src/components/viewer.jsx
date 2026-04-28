'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }) {
  const { scene } = useGLTF(url);
  // Optional: Center the model automatically
  return <primitive object={scene} />;
}

export default function MountingViewer({ modelPath }) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
      <color attach="background" args={['#18181b']} /> {/* Match bg-zinc-900 */}
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.5} contactShadow={true} shadowBias={-0.001}>
          <Model url={modelPath} />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enableZoom={false} />
    </Canvas>
  );
}