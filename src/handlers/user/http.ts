import { Request, Response } from "express";
import { IUserHandler } from "../../interfaces/handlers/user";
import { IUser } from "../../interfaces/models/user";
import { IUserService } from "../../interfaces/services/user";

export default class UserHandler implements IUserHandler {
  private userService;

  constructor(service: IUserService) {
    this.userService = service;

    /* ==================>🔐Bind all methods🔐<================== */
    this.add = this.add.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async add(req: Request, res: Response): Promise<void> {
    try {
      const id = await this.userService.add(req.body as IUser);

      res.status(200).json({ id });
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        response,
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const user = await this.userService.getById(id);

      res.status(200).json({ user });
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        response,
      });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.get();

      res.status(200).json({ users });
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        response,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = req.body as IUser;

      const userId = await this.userService.update(id, user);

      res.status(200).json({ userId });
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        response,
      });
    }
  }
}
