import { Center, ContactShadows, Environment, OrbitControls, PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import styled from "styled-components";
import Room from "./Room";
import { Loader } from "./Loader";
import { CustomControls } from "./CustomControls";
import { useZustand } from "../hooks/useZustand";
import Room2 from "./Room2";
import { Perf } from "r3f-perf";
import { Sphere } from "./Sphere";
import { Cube } from "./decoration/Cube";
import Table from "./Table";
import { SimpleRoom } from "./SimpleRoom";
import { useControls } from "leva";
import { Divider } from "./Divider";
import { Sofa } from "./Sofa";
import { Bed } from "./Bed";
import { Photo } from "./Photo";
import { MovieScreen } from "./MovieScreen";
import { Remote } from "./Remote";
import { TvShelve } from "./TvShelve";
import { Knot } from "./Knot";
import { Dogs } from "./Dogs";
import { Desk } from "./Desk";
import { DeskDecoration } from "./DeskDecoration";
import { Raycaster, Vector2 } from "three";
import { useDecoration } from "../hooks/useDecoration";

export const Scene = () => {
  const updateStore = useZustand("update");
  const orbit = useRef();

  return (
    <Container>
      <Canvas gl={{ physicallyCorrectLights: true, antialias: true }} dpr={[1, 2]} camera={{ fov: 60 }}>
        <OrbitControls ref={orbit} />

        {/* <PerspectiveCamera position={[2, 1, 3]} makeDefault /> */}
        {/* <PointerLockControls camera-position={[2, 1, 3]} /> */}
        {/* <CustomControls /> */}
        <ambientLight intensity={2.5} />
        <Environment preset="apartment" />
        <Suspense fallback={<Loader />}>
          <SimpleRoom />
          <Divider />
          <Sofa />
          <Bed />
          <Photo />
          <MovieScreen />
          <Remote />
          <TvShelve />
          <Knot />
          <Dogs />
          <Desk />
          <DeskDecoration />
        </Suspense>
        <Perf position="top-left" />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
