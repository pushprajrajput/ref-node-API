import { IUser } from "../../models/user";

export interface IUserService {
  add(user: IUser): Promise<string>;
  get(): Promise<IUser[]>;
  getById(id: string): Promise<IUser>;
  update(id: string, user: IUser): Promise<string>;
}
