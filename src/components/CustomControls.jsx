import { PointerLockControls } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useZustand } from "../hooks/useZustand";
import { animated, easings, useSpring } from "@react-spring/three";

export const CustomControls = () => {
  const locked = useZustand("locked");
  const camPos = useZustand("camPos");
  const test = useRef();
  const [initRotation, setInitRotation] = useState([Math.PI / 2, 0, 0]);

  const AnimatedCamera = animated(PointerLockControls);

  const { position } = useSpring({
    position: camPos,
    config: {
      easing: easings.easeInOutQuad,
      duration: 1000,
      precision: 0.0001,
    },
  });

  const { rotation } = useSpring({
    rotation: initRotation,
    config: {
      easing: easings.easeInOutQuad,
      duration: 2000,
      precision: 0.0001,
    },
  });

  useEffect(() => {
    setInitRotation([0, 0, 0]);
  }, []);

  return (
    <>
      <AnimatedCamera
        ref={test}
        makeDefault
        camera-position={position}
        lock={() => {}}
        isLocked={locked}
        // onChange={() => console.log(test.current.camera.rotation)}
      ></AnimatedCamera>
    </>
  );
};
