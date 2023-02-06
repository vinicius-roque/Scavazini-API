import { Request, Response } from "express";
import { getAllTopics } from "./../services/topicService.js";

export async function getAll(req: Request, res: Response) {
  const id = req.params.id;
  const topics = await getAllTopics(+id);

  return res.send(topics);
}