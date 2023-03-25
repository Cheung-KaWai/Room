import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Room from "./Room";

export const Scene = () => {
  return (
    <Container>
      <Canvas gl={{ physicallyCorrectLights: true, antialias: true }} dpr={[1, 2]}>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <Environment preset="apartment" />
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
