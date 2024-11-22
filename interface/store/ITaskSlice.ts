import { ITask } from "../generics";

export interface ITaskState {
  count: number;
  tasks: ITask[];
}

interface ITaskActions {
  increment: () => void;
  decrement: () => void;
}

export interface ITaskSlice {
  taskState: ITaskState;
  taskActions: ITaskActions;
}
