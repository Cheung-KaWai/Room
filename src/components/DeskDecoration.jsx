/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 deskDecoration.glb -T -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DeskDecoration(props) {
  const { nodes, materials } = useGLTF("/models/deskDecoration-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.plant.geometry} material={materials["Material.017"]} position={[2.975196, 1.355264, -2.590324]} rotation={[0, -1.570535, 0]} />
      <group position={[2.808597, 0.822304, -2.828002]} scale={0.007387}>
        <mesh geometry={nodes["Nicolas_Aubagnac_Durer_S_mat(1)_1"].geometry} material={materials.Nicolas_Aubagnac_Durer_S_mat1_mtl_1} />
        <mesh geometry={nodes["Nicolas_Aubagnac_Durer_S_mat(1)_2"].geometry} material={materials["Material.018"]} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/deskDecoration-transformed.glb");