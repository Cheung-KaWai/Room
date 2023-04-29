import React from "react";
import { floorTextures } from "../data/floorTextures";
import { useTexture } from "@react-three/drei";
import { textureSettings } from "../lib/functions";

export const useFloorTexture = (type) => {
  const data = floorTextures[type].map((entry) => entry.path);
  const names = floorTextures[type].map((entry) => entry.name);
  const textures = useTexture(data);

  textureSettings(textures);

  const maps = textures.reduce((acc, texture, index) => {
    acc[names[index]] = texture;
    return acc;
  }, {});

  return maps;
};
