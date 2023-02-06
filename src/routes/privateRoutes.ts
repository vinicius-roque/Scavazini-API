import { Router } from "express";
import { validateJWT } from "../middlewares/validateJWT.js";
import topicRouter from "./topicRouter.js";
import moduleRouter from "./moduleRouter.js"

const privateRoutes = Router();

privateRoutes
  .use(validateJWT)
  .use("/topic", topicRouter)
  .use("/modules", moduleRouter);

export default privateRoutes;