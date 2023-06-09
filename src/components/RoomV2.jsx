/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 roomV2.glb -T -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RoomV2(props) {
  const { nodes, materials } = useGLTF("/models/roomV2-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Room.geometry} material={materials["Material.003"]}>
        <group position={[4.061341, 0, -4.933816]}>
          <mesh geometry={nodes.Window001.geometry} material={materials.Door_material} />
          <mesh geometry={nodes.Window001_1.geometry} material={materials.Door_material} />
          <mesh geometry={nodes.Window001_2.geometry} material={materials.Door_material} />
          <mesh geometry={nodes.Window001_3.geometry} material={materials.Door_material} />
        </group>
        <mesh geometry={nodes.Ceiling.geometry} material={materials["Material.003"]} />
        <mesh geometry={nodes.Floor.geometry} material={materials["Material.001"]} />
        <mesh geometry={nodes.DoorFrame.geometry} material={materials["Material.004"]} position={[3.990422, 0, -0.033149]}>
          <mesh geometry={nodes.Door.geometry} material={materials.Door_material} position={[-0.92, 1.05, 0.0286]} />
          <mesh geometry={nodes.Door001.geometry} material={materials.Door_material} position={[0.92, 1.05, 0.0286]} />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/roomV2-transformed.glb");
