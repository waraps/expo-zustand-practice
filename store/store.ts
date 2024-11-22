import { IPokeSlice, ITaskSlice, IUserSlice } from "@/interface";
import { create } from "zustand";
import { createPokeSlice } from "./pokeSlice";
import { createUserSlice } from "./userSlice";
import { createTaskSlice } from "./taskSlice";

type TAppStore = IPokeSlice & IUserSlice & ITaskSlice;

export const useStore = create<TAppStore>()((...a) => ({
  ...createUserSlice(...a),
  ...createPokeSlice(...a),
  ...createTaskSlice(...a),
}));
