import { Box, Point } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { BufferGeometry, Float32BufferAttribute, PointsMaterial, Vector3 } from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
export const Cube = () => {
  const cube = useRef();
  const particleCube = useRef();

  let pointsGeometry = new BufferGeometry();
  let pointsMaterial = new PointsMaterial({
    color: 0x3cc7b7,
    size: 0.003,
  });

  useFrame((state) => {
    particleCube.current.rotation.y += 0.01;
    particleCube.current.rotation.x += 0.005;
    particleCube.current.position.y = 1.23 + Math.sin(state.clock.elapsedTime) * 0.025;
  });

  useEffect(() => {
    const sampler = new MeshSurfaceSampler(cube.current).build();

    // Array used to store all points coordinates
    const vertices = [];
    // Create a dummy Vector to store the sampled coordinates
    const tempPosition = new Vector3();
    // Loop to sample a coordinate for each points
    for (let i = 0; i < 1000; i++) {
      // Sample a random position in the torus
      sampler.sample(tempPosition);
      // Push the coordinates of the sampled coordinates into the array
      vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
    }

    // Define all points positions from the previously created array
    pointsGeometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    // Define the matrial of the points
  }, []);

  return (
    <>
      <Box
        ref={cube}
        visible={false}
      />
      <points
        ref={particleCube}
        geometry={pointsGeometry}
        material={pointsMaterial}
        position={[8.7, 1.25, -4.57]}
        scale={0.15}
      />
    </>
  );
};
