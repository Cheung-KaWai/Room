import React from "react";
import { cameraStore } from "../store/store";

export const useZustand = (name) => {
  const storeValue = cameraStore((state) => state[name]);

  return storeValue;
};
