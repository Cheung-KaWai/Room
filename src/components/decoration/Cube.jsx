import { Box, Point, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { BufferGeometry, Color, Float32BufferAttribute, PointsMaterial, Raycaster, Vector2, Vector3 } from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { useDecoration } from "../../hooks/useDecoration";
import { PixelCount } from "./PixelCount";
export const Cube = () => {
  const cube = useRef();
  const particleCube = useRef();
  const colorPalet = [new Color("#d8ff15"), new Color("#3cc7b7")];
  const tempPosition = new Vector3();
  const vertices = [];
  const colors = [];
  const updateDecoration = useDecoration("update");

  let sampler;
  const sparklesGeometry = new BufferGeometry();
  const pointsMaterial = new PointsMaterial({
    color: 0x3cc7b7,
    size: 0.003,
    alphaTest: 0.2,
    vertexColors: true,
  });

  useFrame((state) => {
    particleCube.current.rotation.y += 0.01;
    particleCube.current.rotation.x += 0.005;
    particleCube.current.position.y = 1.23 + Math.sin(state.clock.elapsedTime) * 0.025;
  });

  const addPoint = () => {
    sampler.sample(tempPosition);
    vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
    sparklesGeometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    const color = colorPalet[Math.floor(Math.random() * colorPalet.length)];
    colors.push(color.r, color.g, color.b);
    sparklesGeometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
    updateDecoration("amountVertex", vertices.length / 3);
  };

  useEffect(() => {
    sampler = new MeshSurfaceSampler(cube.current).build();
    const addPointEverySecond = setInterval(() => {
      if (vertices.length < 3000) {
        addPoint();
      } else {
        clearInterval(addPointEverySecond);
      }
    }, 500);

    return () => {
      clearInterval(addPointEverySecond);
    };
  }, []);

  return (
    <>
      <Box ref={cube} name="cube" visible={false} position={[8.7, 1.25, -4.57]} scale={0.35} />
      <points ref={particleCube} geometry={sparklesGeometry} material={pointsMaterial} position={[8.7, 1.25, -4.57]} scale={0.15} />
      <PixelCount />
    </>
  );
};
