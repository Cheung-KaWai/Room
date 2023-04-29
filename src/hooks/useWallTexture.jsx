import React from "react";
import { wallTextures } from "../data/wallTextures";
import { useTexture } from "@react-three/drei";
import { textureSettings } from "../lib/functions";

export const useWallTexture = (type) => {
  const data = wallTextures[type].map((entry) => entry.path);
  const names = wallTextures[type].map((entry) => entry.name);
  const textures = useTexture(data);

  textureSettings(textures);

  const maps = textures.reduce((acc, texture, index) => {
    acc[names[index]] = texture;
    return acc;
  }, {});

  return maps;
};
