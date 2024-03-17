import express from "express";
import { IUserService } from "../../interfaces/services/user";
import IUserHandler from "./http";

export default function handleUserRoutes(userService: IUserService) {
  const router = express.Router();
  const http = new IUserHandler(userService);

  router.post("/", (req, res) => http.add(req, res));

  router.get("/", (req, res) => http.getAll(req, res));

  router.get("/:id", (req, res) => http.getById(req, res));

  router.put("/:id", (req, res) => http.update(req, res));

  return router;
}
