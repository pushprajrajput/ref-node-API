import { IUser } from "../../interfaces/models/user";
import { IUserRepository } from "../../interfaces/repositories/user";
import { IUserService } from "../../interfaces/services/user";

interface schema {
  userRepository: IUserRepository;
}
export default class UserService implements IUserService {
  private userRepository: schema["userRepository"];

  constructor(repos: schema) {
    this.userRepository = repos.userRepository;
  }

  public async get(): Promise<IUser[]> {
    return this.userRepository.getAll();
  }

  public async update(id: string, user: IUser): Promise<string> {
    return this.userRepository.update(id, user);
  }

  public async add(user: IUser): Promise<string> {
    return this.userRepository.add(user);
  }

  public async getById(id: string): Promise<IUser> {
    return this.userRepository.getById(id);
  }
}
