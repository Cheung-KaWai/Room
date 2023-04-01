import { Center, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import styled from "styled-components";
import Room from "./Room";
import { Loader } from "./Loader";
import { CustomControls } from "./CustomControls";
import { useZustand } from "../hooks/useZustand";
import Room2 from "./Room2";

export const Scene = () => {
  const updateStore = useZustand("update");

  return (
    <Container>
      <Canvas
        gl={{ physicallyCorrectLights: true, antialias: true }}
        dpr={[1, 2]}
        camera={{ fov: 80 }}
        onPointerDown={() => updateStore("locked", true)}
        onPointerUp={() => updateStore("locked", false)}
      >
        {/* <OrbitControls /> */}
        <CustomControls />
        <ambientLight intensity={1.5} />
        <Environment preset="apartment" />
        <Suspense fallback={<Loader />}>
          <Room2 />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
