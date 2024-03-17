import cors from "cors";
import express from "express";
import UserRepository from "./repositories/user";
import UserService from "./services/user";
import handleUserRoutes from "./handlers/user/routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

function main() {
  const userRepository = new UserRepository();
  const userService = new UserService({ userRepository });
  const userRoutes = handleUserRoutes(userService);

  server.use("/users", userRoutes);

  server.listen(8000, () => {
    console.log("Listening at 8000");
  });
}

main();
