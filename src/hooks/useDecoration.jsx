import React from "react";
import { decorationStore } from "../store/store";

export const useDecoration = (name) => {
  const storeValue = decorationStore((state) => state[name]);

  return storeValue;
};
