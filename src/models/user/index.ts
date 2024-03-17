import { IUser } from "../../interfaces/models/user";

export default class User implements IUser {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
  }
}
