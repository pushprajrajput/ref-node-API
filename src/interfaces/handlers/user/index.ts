import { Request, Response } from "express";

export interface IUserHandler {
  add(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
}
