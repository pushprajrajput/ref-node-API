import { IUser } from "../../interfaces/models/user";
import { IUserRepository } from "../../interfaces/repositories/user";
import User from "../../models/user";

export default class UserRepository implements IUserRepository {
  constructor() {}

  public async getAll(): Promise<IUser[]> {
    const users: IUser[] = [];
    return users;
  }

  public async add(user: IUser): Promise<string> {
    return "";
  }

  public async getById(id: string): Promise<IUser> {
    const user: IUser = new User({
      id,
      name: "Name",
      email: "email@email.com",
      phone: "+91 96875 65963",
    });
    return user;
  }

  public async update(id: string, user: IUser): Promise<string> {
    return "";
  }
}
