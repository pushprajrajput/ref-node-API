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
      const id = await this.userService.add(req.body as unknown as IUser);

      res.status(200).json({ id });
    } catch (error: any) {
      const response = error.response;
      res.status(500).json({
        error,
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const incomingCalls = await this.userService.getId(id);

      res.status(200).json({ incomingCalls });
    } catch (error: any) {
      res.status(500).json({
        error,
      });
    }
  }
}
