import cors from "cors";
import express from "express";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

function main() {
  server.listen(8000);
}

main();
