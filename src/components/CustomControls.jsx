import { PointerLockControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useZustand } from "../hooks/useZustand";
import { animated, easings, useSpring } from "@react-spring/three";

export const CustomControls = () => {
  const locked = useZustand("locked");
  const camPos = useZustand("camPos");
  const test = useRef();

  const AnimatedCamera = animated(PointerLockControls);

  const { position } = useSpring({
    position: camPos,
    config: {
      easing: easings.easeInOutQuad,
      duration: 1000,
      precision: 0.0001,
    },
  });

  return (
    <>
      <AnimatedCamera
        ref={test}
        makeDefault
        camera-position={position}
        camera-rotation={[-3.09, -0.75, -3.12]}
        lock={() => {}}
        isLocked={locked}
        onChange={() => console.log(test.current.camera.rotation)}
      ></AnimatedCamera>
    </>
  );
};
