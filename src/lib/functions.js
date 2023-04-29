import { sRGBEncoding } from "three";

export const textureSettings = (textures) => {
  return textures.map((texture) => {
    texture.encoding = sRGBEncoding;
    texture.flipY = false;
    return texture;
  });
};
