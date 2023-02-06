import { getAll } from "../repositories/topicRepository.js";
import { notFoundError } from "../utils/errorsUtils.js";

export async function getAllTopics(id: number) {
  const topic = await getAll(id);
  if (!topic) {
    throw notFoundError("There is no topic!");
  }

  return topic;
}