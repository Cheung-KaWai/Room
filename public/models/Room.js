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
      <mesh geometry={nodes.Base.geometry} material={materials.Material} position={[0, -0.003441, 0]} />
      <mesh geometry={nodes.Ceiling.geometry} material={materials['Material.001']} position={[0, 2.996559, 0]} />
      <mesh geometry={nodes.OuterWalls.geometry} material={materials['Material.004']} position={[-2.9, 1.6, 0]} />
      <mesh geometry={nodes.InnerWalls.geometry} material={nodes.InnerWalls.material} position={[3, 1.116622, 0.965227]} />
      <mesh geometry={nodes.Floor.geometry} material={materials['Material.003']} position={[0, -0.003441, 0]} />
      <mesh geometry={nodes.Window.geometry} material={materials.Windowframe} position={[-2.9, 1.6, 0]} />
      <mesh geometry={nodes.WindowGlass.geometry} material={materials['Windowglass.001']} position={[-2.9, 1.6, 0]} />
      <mesh geometry={nodes.GardenFloor.geometry} material={materials['Material.005']} position={[3, 0, 6]} />
      <mesh geometry={nodes.WoodPath.geometry} material={materials['Material.002']} position={[0, -0.003441, 0]} />
      <mesh geometry={nodes.Pilar.geometry} material={materials['Material.004']} position={[8.75, 1.1, 3.75]} />
      <mesh geometry={nodes.OutdoorCeiling.geometry} material={materials['Material.006']} position={[0, 2.996559, 0]} />
    </group>
  )
}

useGLTF.preload('/room-transformed.glb')