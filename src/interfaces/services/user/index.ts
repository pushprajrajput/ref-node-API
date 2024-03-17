import { IUser } from "../../models/user";

export interface IUserService {
  add(user: IUser): Promise<string>;
  getId(id: string): Promise<IUser[]>;
}
