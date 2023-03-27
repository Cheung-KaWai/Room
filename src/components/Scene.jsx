import { Center, ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import Room from "./Room";
import { Loader } from "./Loader";

export const Scene = () => {
  const orbit = useRef();
  // Vector3 {x: 4.85399409898707, y: 7.885380814144126, z: 13.63531731455013}
  // {x: 4.754310781433894, y: -2.350123706942933, z: 1.712995996909236}
  y: z: return (
    <Container>
      <Canvas gl={{ physicallyCorrectLights: true, antialias: true }} dpr={[1, 2]} camera={{ fov: 80 }}>
        <OrbitControls ref={orbit} onChange={() => console.log(orbit)} target={[4.75, -2.35, 1.71]} />
        <PerspectiveCamera position={[5.17, 10.48, 21.6]} makeDefault />
        <ambientLight intensity={1.5} />
        <Environment preset="apartment" />
        {/* <directionalLight position={[3, 3, 3]} /> */}
        <Suspense fallback={<Loader />}>
          <Room />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
