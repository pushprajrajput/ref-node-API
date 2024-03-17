import { IUser } from "../../interfaces/models/user";
import { IUserRepository } from "../../interfaces/repositories/user";

export default class implements IUserRepository {
  constructor() {}
  add(user: IUser): Promise<string> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  update(id: string, user: IUser): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
