import { IUser } from "../../interfaces/models/user";
import { IUserService } from "../../interfaces/services/user";

export default class UserService implements IUserService {
  add(user: IUser): Promise<string> {
    throw new Error("Method not implemented.");
  }
  getId(id: string): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }
}
