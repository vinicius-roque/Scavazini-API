import { Router } from "express";
import authRouter from "./authRouter.js";

const publicRoutes = Router();

publicRoutes.use("/auth", authRouter);

export default publicRoutes;