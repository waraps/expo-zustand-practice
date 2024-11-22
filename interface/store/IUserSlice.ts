import { IUser } from "../generics";

export interface IUserSlice {
  user: IUser;
  setName: (name: string) => void;
  setRegion: (region: string) => void;
  count: number;
}
