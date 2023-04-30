import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const cameraStore = create((set) => ({
  locked: false,
  camPos: [-1.49, 1.7, -5.47],
  update: (name, value) => set({ [name]: value }),
}));

export const decorationStore = create((set) => ({
  amountVertex: 0,
  remote: false,
  toggleRemote: () =>
    set((state) => ({
      remote: !state.remote,
    })),
  update: (name, value) => set({ [name]: value }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("decoration", decorationStore);
}
