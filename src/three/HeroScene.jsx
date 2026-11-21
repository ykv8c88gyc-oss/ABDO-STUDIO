import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Float,
  Text,
  Sparkles,
  Stars,
} from "@react-three/drei";

const codeLines = [
  ["import React from 'react';", "#C792EA"],
  ["import { motion } from 'framer-motion';", "#82AAFF"],
  ["", "#FFFFFF"],
  ["const Developer = () => {", "#C792EA"],
  ["  const [creative, setCreative] = useState(true);", "#E6C07B"],
  ["", "#FFFFFF"],
  ["  return (", "#C792EA"],
  ["    <main className='digital-world'>", "#82AAFF"],
  ["      <section className='hero'>", "#82AAFF"],
  ["        <h1>ABDO STUDIO</h1>", "#A5E3A0"],
  ["        <p>Building digital experiences</p>", "#A5E3A0"],
  ["        <button>Explore Projects</button>", "#E6C07B"],
  ["      </section>", "#82AAFF"],
  ["    </main>", "#82AAFF"],
  ["  );", "#C792EA"],
  ["};", "#C792EA"],
  ["", "#FFFFFF"],
  ["export default Developer;", "#C792EA"],
];

function CodeEditor() {
  const cursor = useRef();

  useFrame(({ clock }) => {
    if (cursor.current) {
      cursor.current.visible = Math.floor(clock.elapsedTime * 2) % 2 === 0;
    }
  });

  return (
    <group>
      {/* MAIN METAL FRAME */}
      <RoundedBox
        args={[5.7, 3.9, 0.22]}
        radius={0.14}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#261333"
          metalness={0.85}
          roughness={0.22}
        />
      </RoundedBox>

      {/* BLACK SCREEN */}
      <mesh position={[0, 0, 0.116]}>
        <planeGeometry args={[5.48, 3.68]} />
        <meshBasicMaterial color="#08070C" />
      </mesh>

      {/* TOP BAR */}
      <mesh position={[0, 1.73, 0.13]}>
        <planeGeometry args={[5.48, 0.36]} />
        <meshBasicMaterial color="#21172B" />
      </mesh>

      {/* WINDOW DOTS */}
      {["#FF5F57", "#FEBC2E", "#28C840"].map((color, index) => (
        <mesh
          key={color}
          position={[-2.53 + index * 0.15, 1.73, 0.15]}
        >
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}

      <Text
        position={[-1.95, 1.73, 0.15]}
        fontSize={0.105}
        color="#D6B5EA"
        anchorX="left"
        anchorY="middle"
      >
        ABDO-STUDIO / developer.jsx
      </Text>

      <Text
        position={[2.35, 1.73, 0.15]}
        fontSize={0.09}
        color="#76E6AD"
        anchorX="right"
        anchorY="middle"
      >
        ● LIVE
      </Text>

      {/* SIDEBAR */}
      <mesh position={[-2.23, -0.06, 0.14]}>
        <planeGeometry args={[0.95, 3.2]} />
        <meshBasicMaterial color="#15111D" />
      </mesh>

      <Text
        position={[-2.62, 1.43, 0.16]}
        fontSize={0.085}
        color="#C34BFF"
        anchorX="left"
      >
        EXPLORER
      </Text>

      {[
        "ABDO-STUDIO",
        "  components",
        "  pages",
        "  src",
        "    App.jsx",
        "    Home.jsx",
        "    About.jsx",
        "    HeroScene.jsx",
        "  public",
        "  node_modules",
      ].map((item, index) => (
        <Text
          key={index}
          position={[-2.62, 1.12 - index * 0.25, 0.16]}
          fontSize={0.077}
          color={index === 7 ? "#D68CFF" : "#A69BAF"}
          anchorX="left"
        >
          {item}
        </Text>
      ))}

      {/* EDITOR TAB */}
      <mesh position={[0.15, 1.48, 0.15]}>
        <planeGeometry args={[1.1, 0.16]} />
        <meshBasicMaterial color="#35213F" />
      </mesh>

      <Text
        position={[-1.63, 1.48, 0.17]}
        fontSize={0.09}
        color="#D9B5F3"
        anchorX="left"
        anchorY="middle"
      >
        developer.jsx
      </Text>

      {/* LINE NUMBERS */}
      {Array.from({ length: codeLines.length }).map((_, index) => (
        <Text
          key={index}
          position={[-1.64, 1.25 - index * 0.15, 0.17]}
          fontSize={0.083}
          color="#655A70"
          anchorX="right"
          anchorY="middle"
        >
          {String(index + 1).padStart(2, "0")}
        </Text>
      ))}

      {/* CODE - INSIDE BLACK SCREEN ONLY */}
      {codeLines.map(([line, color], index) => (
        <Text
          key={index}
          position={[-1.48, 1.25 - index * 0.15, 0.18]}
          fontSize={0.095}
          color={color}
          anchorX="left"
          anchorY="middle"
          maxWidth={4.0}
        >
          {line || " "}
        </Text>
      ))}

      {/* BLINKING CURSOR */}
      <mesh ref={cursor} position={[-1.48, -1.43, 0.19]}>
        <boxGeometry args={[0.018, 0.11, 0.012]} />
        <meshBasicMaterial color="#C34BFF" />
      </mesh>

      {/* BOTTOM STATUS BAR */}
      <mesh position={[0, -1.75, 0.15]}>
        <planeGeometry args={[5.48, 0.22]} />
        <meshBasicMaterial color="#351C43" />
      </mesh>

      <Text
        position={[-2.58, -1.75, 0.17]}
        fontSize={0.075}
        color="#E0B5FF"
        anchorX="left"
        anchorY="middle"
      >
        JAVASCRIPT
      </Text>

      <Text
        position={[2.55, -1.75, 0.17]}
        fontSize={0.075}
        color="#76E6AD"
        anchorX="right"
        anchorY="middle"
      >
        ABDO STUDIO / READY
      </Text>
    </group>
  );
}

function InteractiveScreen() {
  const group = useRef();

  useFrame(({ pointer, clock }, delta) => {
    if (!group.current) return;

    const targetX = -pointer.y * 0.16;
    const targetY = pointer.x * 0.28;

    group.current.rotation.x +=
      (targetX - group.current.rotation.x) * 2.5 * delta;

    group.current.rotation.y +=
      (targetY - group.current.rotation.y) * 2.5 * delta;

    group.current.position.x +=
      (pointer.x * 0.13 - group.current.position.x) * 2 * delta;

    const targetPositionY =
      Math.sin(clock.elapsedTime * 0.65) * 0.07 +
      pointer.y * 0.08;

    group.current.position.y +=
      (targetPositionY - group.current.position.y) * 2 * delta;
  });

  return (
    <group ref={group}>
      <Float
        speed={0.8}
        rotationIntensity={0.025}
        floatIntensity={0.08}
      >
        <CodeEditor />
      </Float>

      {/* PURPLE 3D ORBIT */}
      <mesh rotation={[0.8, 0.4, 0.2]}>
        <torusGeometry args={[3.35, 0.009, 8, 100]} />
        <meshStandardMaterial
          color="#A020F0"
          emissive="#A020F0"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <pointLight
        position={[4, 3, 5]}
        intensity={25}
        color="#C34BFF"
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={15}
        color="#603BFF"
      />

      <InteractiveScreen />

      <Sparkles
        count={30}
        scale={8}
        size={1.8}
        speed={0.2}
        color="#C34BFF"
        opacity={0.5}
      />

      <Stars
        radius={30}
        depth={15}
        count={65}
        factor={1.2}
        fade
        speed={0.12}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 43 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}