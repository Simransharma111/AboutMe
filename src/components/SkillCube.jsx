import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

const CubeFace = ({ position, rotation, text }) => (
  <mesh position={position} rotation={rotation}>
    <planeGeometry args={[2, 2]} />
    <meshStandardMaterial color="#4f46e5" />
    <Html
      position={[0, 0, 0.01]}
      center
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: "1.5rem",
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {text}
    </Html>
  </mesh>
);

const RotatingCube = () => {
  const cubeRef = useRef();

  useFrame(({ clock }) => {
    if (cubeRef.current) {
      const t = clock.getElapsedTime();
      cubeRef.current.rotation.x = t / 4;
      cubeRef.current.rotation.y = t / 3;
    }
  });

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
  ];

  return (
    <group ref={cubeRef}>
      <CubeFace position={[0, 0, 1]} text={skills[0]} />
      <CubeFace position={[0, 0, -1]} rotation={[0, Math.PI, 0]} text={skills[1]} />
      <CubeFace position={[-1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} text={skills[2]} />
      <CubeFace position={[1, 0, 0]} rotation={[0, Math.PI / 2, 0]} text={skills[3]} />
      <CubeFace position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} text={skills[4]} />
      <CubeFace position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} text={skills[5]} />
    </group>
  );
};

const SkillCube = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} />
        <RotatingCube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SkillCube;
