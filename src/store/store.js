import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const cameraStore = create((set) => ({
  locked: false,
  camPos: [2, 0.8, 2.4],
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
  mountStoreDevtool("camera", cameraStore);
}
