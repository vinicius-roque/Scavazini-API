import { Router } from "express";
import { createUserSchema } from "./../schema/authSchema.js";
import { signUp } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const authRouter = Router();

authRouter
  .post("/sign-up", validateSchema(createUserSchema), signUp);

export default authRouter;