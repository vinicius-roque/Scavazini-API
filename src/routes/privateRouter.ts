import { Router } from "express";
import { validateJWT } from "../middlewares/validateJWT.js";
import topicRouter from "./topicRouter.js";

const privateRoutes = Router();

privateRoutes
  .use(validateJWT)
  .use("/topic", topicRouter);

export default privateRoutes;