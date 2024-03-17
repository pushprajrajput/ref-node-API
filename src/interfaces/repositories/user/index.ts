import { IUser } from "../../models/user";

export interface IUserRepository {
  add(user: IUser): Promise<string>;
  get(id: string): Promise<IUser>;
  update(id: string, user: IUser): Promise<string>;
}
