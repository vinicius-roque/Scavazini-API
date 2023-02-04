import { Request, Response, NextFunction } from "express";

const errors = {
  "conflict": 401,
  "wrong-schema": 422,
  "not-found": 404,
  "unauthorized": 401,
  "unprocessable": 422
};

export function errorHandler(error: { message: string; type: string | number; }, _req: Request, res: Response, _next: NextFunction) {
  const message = error.message || "There is a problem somewhere";

  const status = errors[error.type] || 500;
  res.status(status).json({ message });
}
