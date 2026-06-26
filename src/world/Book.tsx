import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useBookStore } from "../store/bookStore";

export default function Book() {
  const opened = useBookStore((s) => s.opened);

  const cover = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!cover.current) return;

    const target = opened ? -Math.PI : 0;

    cover.current.rotation.z = THREE.MathUtils.lerp(
      cover.current.rotation.z,
      target,
      delta * 2.5,
    );

    cover.current.position.y = THREE.MathUtils.lerp(
      cover.current.position.y,
      opened ? 0.09 : 0.09,
      delta * 2.5,
    );
  });

  return (
    <group>
      {/* ALT KAPAK */}

      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.06, 2.2]} />

        <meshStandardMaterial color="#5b3925" />
      </mesh>

      {/* SAYFALAR */}

      <mesh position={[0, 0.07, 0]}>
        <boxGeometry args={[3, 0.07, 2]} />

        <meshStandardMaterial color="#f8f4ec" />
      </mesh>

      {/* KİTAP SIRTI */}

      <mesh position={[-1.6, 0.07, 0]} castShadow>
        <boxGeometry args={[0.12, 0.22, 2.2]} />

        <meshStandardMaterial color="#372014" />
      </mesh>

      {/* ÖN KAPAK */}

      <group ref={cover} position={[-1.6, 0.17, 0]}>
        <mesh position={[1.6, 0, 0]} castShadow>
          <boxGeometry args={[3.2, 0.06, 2.2]} />

          <meshStandardMaterial color="#5b3925" />
        </mesh>
      </group>
    </group>
  );
}
