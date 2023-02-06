import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

import publicRoutes from "./routes/publicRoutes.js";
import privateRoutes from "./routes/privateRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const server = express();
dotenv.config();

server.use(json());
server.use(cors());

server
  .use(publicRoutes)
  .use(privateRoutes)
  .use(errorHandler);

export default server;