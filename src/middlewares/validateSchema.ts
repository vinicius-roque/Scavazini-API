import joi, { func } from "joi";
import { Request, Response, NextFunction } from "express";

export function validateSchema(schema: joi.ObjectSchema) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      throw { type: "wrong-schema", message: validation.error.message };
    }

    next();
  };
}