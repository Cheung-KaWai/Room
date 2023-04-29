import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshBasicMaterial, sRGBEncoding } from "three";

export default function Table({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/table-transformed.glb");
  const tableMaterial = useTexture(["/textures/table/table.jpg", "/textures/table/leg.jpg"]);
  tableMaterial.map((x) => {
    x.encoding = sRGBEncoding;
    x.flipY = false;
  });

  const tableTop = new MeshBasicMaterial({
    map: tableMaterial[0],
  });

  const tableLeg = new MeshBasicMaterial({
    map: tableMaterial[1],
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.TableTop.geometry} material={materials["Material.009"]} position={[-2.378422, 0.915742, 1.437159]} rotation={[0, 1.570535, 0]} />
      <mesh geometry={nodes.Leg.geometry} material={materials["Material.001"]} position={[-2.378422, 0.506969, 2.537838]} rotation={[0, 1.570535, 0]} />
      <mesh geometry={nodes.Leg2.geometry} material={materials["Material.001"]} position={[-2.378422, 0.506969, 0.328582]} rotation={[0, 1.570535, 0]} />
    </group>
  );
}

useGLTF.preload("/models/table-transformed.glb");
