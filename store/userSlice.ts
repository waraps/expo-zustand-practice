import { StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

import { IUserSlice } from "../interface";

export const createUserSlice: StateCreator<IUserSlice, [], [], IUserSlice> = (
  set
) => ({
  // States
  user: {
    name: "",
    region: "",
  },
  count: 30,
  // Actions
  setName: (name: string) =>
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        name,
      },
    })),
  setRegion: (region: string) =>
    set((state) => ({
      ...state,
      user: {
        ...state.user,
        region,
      },
    })),
});
