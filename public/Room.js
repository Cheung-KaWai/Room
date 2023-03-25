/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Floor.geometry} material={materials['Material.003']} position={[0, -0.003441, 0]} />
      <mesh geometry={nodes.Ceiling.geometry} material={materials['Material.001']} position={[0, 2.996559, 0]} />
      <mesh geometry={nodes.OuterWalls.geometry} material={nodes.OuterWalls.material} position={[-2.9, 1.6, 0]} />
      <mesh geometry={nodes.InnerWalls.geometry} material={nodes.InnerWalls.material} position={[3, 1.116622, 0.965227]} />
    </group>
  )
}

useGLTF.preload('/room-transformed.glb')
