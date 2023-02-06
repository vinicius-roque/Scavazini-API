import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../utils/errorsUtils.js";
import jwt from "jsonwebtoken";

export async function validateJWT(req: Request, res: Response, next: NextFunction) {
  let token = req.headers["authorization"];
  if (!token) {
    throw unauthorizedError("No token provided!");
  }

  token = token.replace("Bearer ", "");
  const decrypted = jwt.verify(token, process.env.JWT_SECRET);

  res.locals.user = decrypted;

  next();
}