import { useTexture } from "@react-three/drei";
import { bakedTextures } from "../data/bakes";
import { textureSettings } from "../lib/functions";

export const useBakes = (type) => {
  const data = bakedTextures[type].map((entry) => entry.path);
  const names = bakedTextures[type].map((entry) => entry.name);
  const textures = useTexture(data);

  textureSettings(textures);

  const maps = textures.reduce((acc, texture, index) => {
    acc[names[index]] = texture;
    return acc;
  }, {});

  return maps;
};
