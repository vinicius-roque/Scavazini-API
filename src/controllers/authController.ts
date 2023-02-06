import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
  await userService.createUser(req.body);
  return res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await userService.access({ email, password });
  return res.send(user);
}