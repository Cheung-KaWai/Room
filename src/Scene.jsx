import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Room from "./Room";

export const Scene = () => {
  return (
    <Container>
      <Canvas gl={{ physicallyCorrectLights: true, antialias: true }}>
        <OrbitControls />
        <ambientLight intensity={3} />
        {/* <Environment preset="dawn" /> */}
        {/* <directionalLight position={[3, 3, 3]} /> */}
        <Room />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
