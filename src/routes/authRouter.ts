import { Router } from "express";
import { createUserSchema, accessSchema } from "./../schema/authSchema.js";
import { signIn, signUp } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const authRouter = Router();

authRouter
  .post("/sign-up", validateSchema(createUserSchema), signUp)
  .post("/sign-in", validateSchema(accessSchema), signIn);
export default authRouter;