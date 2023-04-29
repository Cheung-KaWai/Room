/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 SimpleRoom.glb -T -p 6
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBakes } from "../hooks/useBakes";
import { MeshBasicMaterial, MeshStandardMaterial, Vector2 } from "three";
import { useControls } from "leva";
import { useFloorTexture } from "../hooks/useFloorTexture";
import { useWallTexture } from "../hooks/useWallTexture";

export function SimpleRoom(props) {
  const { nodes, materials } = useGLTF("/models/SimpleRoom-transformed.glb");
  const walls = useRef();
  const floor = useRef();
  const ceiling = useRef();

  const bakesWalls = useBakes("walls");
  const wallTexture = useWallTexture("plaster");
  const bakesFloor = useBakes("floor");
  const floorTexture = useFloorTexture("wood");
  const bakesCeiling = useBakes("ceiling");

  const { lightMapIntensity, aoMapIntensity, normalScale } = useControls("bakeSettings", {
    lightMapIntensity: {
      value: 10,
      min: 0,
      max: 20,
      step: 0.01,
    },
    aoMapIntensity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    normalScale: {
      value: 0,
      min: 0,
      max: 50,
      step: 0.01,
    },
  });

  const wallsMaterial = new MeshStandardMaterial({
    ...bakesWalls,
    lightMapIntensity: 5,
    envMapIntensity: 0,
    aoMapIntensity: 0.9,
  });
  const floorMaterial = new MeshBasicMaterial({
    ...bakesFloor,
    ...floorTexture,
    lightMapIntensity: lightMapIntensity,
    aoMapIntensity: aoMapIntensity,
  });
  const ceilingMaterial = new MeshStandardMaterial({
    ...bakesCeiling,
    lightMapIntensity: 1.5,
    envMapIntensity: 0,
    aoMapIntensity: 0.8,
  });

  const glassMaterial = new MeshStandardMaterial({
    envMapIntensity: 100,
    transparent: true,
  });

  useLayoutEffect(() => {
    walls.current.geometry.attributes.uv2 = walls.current.geometry.attributes.uv;
    floor.current.geometry.attributes.uv2 = floor.current.geometry.attributes.uv;
    ceiling.current.geometry.attributes.uv2 = ceiling.current.geometry.attributes.uv;
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh name="Walls" ref={walls} geometry={nodes.Walls.geometry} material={wallsMaterial} />
      <mesh name="Floor" ref={floor} geometry={nodes.Floor.geometry} material={floorMaterial} />
      <mesh name="Window" geometry={nodes.Window.geometry} material={materials.Wall} />
      <mesh name="WindowGlass" geometry={nodes.WindowGlass.geometry} material={glassMaterial} />
      <mesh name="Ceiling" ref={ceiling} geometry={nodes.Ceiling.geometry} material={ceilingMaterial} />
    </group>
  );
}

useGLTF.preload("/models/SimpleRoom-transformed.glb");