import { Router } from "express";
import { getAll } from "../controllers/moduleController.js";

const moduleRouter = Router();

moduleRouter.get("/", getAll);

export default moduleRouter;