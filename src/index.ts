import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import UserRepository from "./repositories/user";
import UserService from "./services/user";
import handleUserRoutes from "./handlers/user/routes";

import { swaggerOptions } from "./swaggerOptions";

const server = express();
const specs = swaggerJsdoc(swaggerOptions);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

function main() {
  const userRepository = new UserRepository();
  const userService = new UserService({ userRepository });
  const userRoutes = handleUserRoutes(userService);

  server.use("/users", userRoutes);
  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  server.listen(8000, () => {
    console.log("Listening at 8000");
  });
}

main();
