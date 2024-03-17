import { IUser } from "../../models/user";

export interface IUserRepository {
  add(user: IUser): Promise<string>;
  getById(id: string): Promise<IUser>;
  getAll(): Promise<IUser[]>;
  update(id: string, user: IUser): Promise<string>;
}
