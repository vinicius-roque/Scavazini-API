import { getAll } from "../repositories/moduleRepository.js";
import { notFoundError } from "../utils/errorsUtils.js";

export async function getAllModules() {
  const modules = await getAll();
  if (!modules.length) {
    throw notFoundError("No modules found!");
  }

  return modules;
}