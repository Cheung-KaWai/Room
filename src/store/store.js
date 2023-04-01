import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const cameraStore = create((set) => ({
  locked: false,
  camPos: [0, 1.7, 0],
  update: (name, value) => set({ [name]: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", cameraStore);
}
