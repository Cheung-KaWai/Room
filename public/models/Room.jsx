/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 room.glb -T -p 6
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/room-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ceiling.geometry} material={materials['Material.001']} position={[0, 2.996559, 0]} />
      <mesh geometry={nodes.OuterWalls.geometry} material={materials['Material.004']} position={[-2.9, 1.6, 0]} />
      <mesh geometry={nodes.InnerWalls.geometry} material={materials['Material.004']} position={[3, 1.116622, 0.965227]} />
      <mesh geometry={nodes.Floor.geometry} material={materials['Material.004']} position={[0, 0.008951, 0]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.009']} position={[8.69703, 1.072963, -2.575509]} scale={[1, 1.5, 1.5]} />
      <mesh geometry={nodes.InnerWalls001.geometry} material={materials['Material.004']} position={[3, 1.116622, 0.965227]} />
    </group>
  )
}

useGLTF.preload('/room-transformed.glb')