import { Center, Text3D } from "@react-three/drei";
import React from "react";
import { useDecoration } from "../../hooks/useDecoration";

export const PixelCount = () => {
  const pixelCount = useDecoration("amountVertex");

  return (
    <>
      <Center position={[8.7, 1.23, -4.83]}>
        <Text3D font={"/fonts/Roboto_Regular.json"} scale={0.06} rotation={[0, -Math.PI / 2, Math.PI / 2]}>
          {pixelCount}
          <meshStandardMaterial color={"#ffffff"} />
        </Text3D>
      </Center>
      <Text3D font={"/fonts/Roboto_Regular.json"} position={[8.7, 1.45, -4.69]} scale={0.06} rotation={[0, -Math.PI / 2, 0]}>
        Pixels
        <meshStandardMaterial color={"#ffffff"} />
      </Text3D>
    </>
  );
};
