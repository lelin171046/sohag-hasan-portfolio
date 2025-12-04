// src/models/ModelViewer.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ path }) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Model path={modelPath} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
