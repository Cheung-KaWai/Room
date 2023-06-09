/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bed.glb -T -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bed(props) {
  const { nodes, materials } = useGLTF("/models/bed-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials["Material.004"]}
        position={[1.844905, 0.350247, 1.612962]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[1.873749, 0.186825, 1.439326]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials["Material.002"]}
        position={[1.843955, 0.456199, 1.387973]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[1.848317, 0.563244, 2.753469]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.005"]}
        position={[1.859753, 0.542672, 2.665377]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.005"]}
        position={[2.247769, 0.569608, 2.537891]}
        rotation={[-0.676451, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.005"]}
        position={[1.518605, 0.566881, 2.496374]}
        rotation={[-0.682248, 0.119682, 1.66749]}
      />
      <mesh
        geometry={nodes.Plane009.geometry}
        material={materials["Material.005"]}
        position={[1.823875, 0.244472, 1.328869]}
        rotation={[0, -1.388397, 1.159382]}
      />
    </group>
  );
}

useGLTF.preload("/models/bed-transformed.glb");
