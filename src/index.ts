import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

import publicRouter from "./routes/publicRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const server = express();
dotenv.config();

server.use(json());
server.use(cors());

server.use(publicRouter);
server.use(errorHandler);

export default server;