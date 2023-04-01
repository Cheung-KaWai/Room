import { OrbitControls, PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useState } from "react";
import { useZustand } from "../hooks/useZustand";

export const CustomControls = () => {
  const locked = useZustand("locked");
  return (
    <>
      <PointerLockControls makeDefault camera-position={[0, 1.8, 0]} lock={() => {}} isLocked={locked}></PointerLockControls>
    </>
  );
};
