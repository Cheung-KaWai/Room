import { OrbitControls, PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useState } from "react";
import { useZustand } from "../hooks/useZustand";
import { animated, easings, useSpring } from "@react-spring/three";

export const CustomControls = () => {
  const locked = useZustand("locked");
  const camPos = useZustand("camPos");

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
      <AnimatedCamera makeDefault camera-position={position} lock={() => {}} isLocked={locked}></AnimatedCamera>
    </>
  );
};
