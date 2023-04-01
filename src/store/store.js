import { create } from "zustand";

export const cameraStore = create((set) => ({
  locked: false,
  camPos: [0, 0, 0],
  update: (name, value) => set({ [name]: value }),
}));
