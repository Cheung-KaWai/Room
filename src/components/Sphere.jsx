import React, { useEffect, useRef } from "react";
import fragment from "../shaders/fragment.glsl?raw";
import vertex from "../shaders/vertex.glsl?raw";
import vertexPars from "../shaders/vertex_pars.glsl?raw";
import { useFrame } from "@react-three/fiber";
import { IcosahedronGeometry, MeshStandardMaterial } from "three";

export const Sphere = () => {
  const sphere = useRef();

  useFrame((state) => {
    if (sphere.current.material.userData.shader) {
      sphere.current.material.userData.shader.uniforms.uTime.value = state.clock.elapsedTime;
      // sphere.current.material.userData.shader.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const geometry = new IcosahedronGeometry(1, 150);

  const material = new MeshStandardMaterial({
    onBeforeCompile: (shader) => {
      material.userData.shader = shader;
      shader.uniforms.uTime = { value: 0 };

      const parseVertexString = `#include <displacementmap_pars_vertex>`;
      shader.vertexShader = shader.vertexShader.replace(parseVertexString, parseVertexString + vertexPars);
    },
  });

  return (
    <mesh
      ref={sphere}
      geometry={geometry}
      material={material}
    ></mesh>
  );
};
