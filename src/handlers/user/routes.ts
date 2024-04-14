import express from "express";
import { IUserService } from "../../interfaces/services/user";
import IUserHandler from "./http";

export default function handleUserRoutes(userService: IUserService) {
  const router = express.Router();
  const http = new IUserHandler(userService);

  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       $ref: '../swagger/userSwaggerSchema.ts#components.schemas.User'
   * /users:
   *   post:
   *     summary: Adda user to a list of users
   *     responses:
   *       200:
   *         description: Add a user to the list.
   *         content:
   *           application/json:
   *             schema:
   *               type: string
   *               items:
   *                 $ref: #/components/schemas/User'
   */
  router.post("/", (req, res) => http.add(req, res));

  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       $ref: '../swagger/user/index.ts#components.schemas.User'
   * /users:
   *   get:
   *     summary: List of users
   *     responses:
   *       200:
   *         description: Get a list of users.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: #/components/schemas/User'
   */
  router.get("/", (req, res) => http.getAll(req, res));

  router.get("/:id", (req, res) => http.getById(req, res));

  router.put("/:id", (req, res) => http.update(req, res));

  return router;
}
