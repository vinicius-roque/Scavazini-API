import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

const server = express();
dotenv.config();

server.use(json());
server.use(cors());

export default server;