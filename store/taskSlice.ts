import { StateCreator } from "zustand";

import { ITaskSlice, ITaskState } from "../interface";

const INITIAL_STATE: ITaskState = {
  count: 0,
  tasks: [],
};

export const createTaskSlice: StateCreator<ITaskSlice, [], [], ITaskSlice> = (
  set
) => ({
  // State
  taskState: INITIAL_STATE,

  // Actions
  taskActions: {
    increment: () =>
      set((state) => ({
        ...state,
        taskState: { ...state.taskState, count: state.taskState.count + 1 },
      })),
    decrement: () =>
      set(({ taskActions, taskState }) => ({
        taskActions,
        taskState: { ...taskState, count: taskState.count + 1 },
      })),
  },
});
