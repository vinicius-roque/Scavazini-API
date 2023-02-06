import { Router } from "express";
import { getAll } from "../controllers/topicController.js";

const topicRouter = Router();

topicRouter.get("/:id", getAll);

export default topicRouter;