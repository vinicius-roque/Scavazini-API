import { Request, Response } from "express";
import { getAllModules } from "../services/moduleService.js";

export async function getAll(req: Request, res: Response) {
  const modules = await getAllModules();

  return res.send(modules);
}