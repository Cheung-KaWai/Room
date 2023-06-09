/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 divider.glb -T -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Divider(props) {
  const { nodes, materials } = useGLTF("/models/divider-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Frame}
        position={[0.659845, 0, 1.48465]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Frame}
        position={[0.659845, 0, 1.48465]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials.Frame}
        position={[0.659845, 0, 1.48465]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.Frame}
        position={[0.528594, 2.506344, 1.743179]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials.Frame}
        position={[0.528594, 1.454833, 0.967946]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials.Frame}
        position={[0.527135, 0.974262, 1.743901]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials.Frame}
        position={[0.528594, 1.851802, 2.001104]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/models/divider-transformed.glb");
