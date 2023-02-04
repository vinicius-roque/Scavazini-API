type AppErrorTypes = "conflict" | "wrong-schema" | "not-found" | "unauthorized" | "unprocessable";

export interface AppErrors {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppErrors {
  return (error as AppErrors).type !== undefined;
}

export function statusCodeForErrors(type: AppErrorTypes) {
  if (type === "conflict") {
    return 409;
  }
  if (type === "wrong-schema") {
    return 422;
  }
  if (type === "not-found") {
    return 404;
  }
  if (type === "unauthorized") {
    return 401;
  }
  if (type === "unprocessable") {
    return 422;
  }
}

export function conflictError(message?: string): AppErrors {
  return {
    type: "conflict",
    message: message ?? ""
  };
}

export function wrongSchemaError(message?: string): AppErrors {
  return {
    type: "wrong-schema",
    message: message ?? ""
  };
}

export function notFoundError(message?: string): AppErrors {
  return {
    type: "not-found",
    message: message ?? ""
  };
}

export function unauthorizedError(message?: string): AppErrors {
  return {
    type: "unauthorized",
    message: message ?? ""
  };
}

export function unprocessableError(message?: string): AppErrors {
  return {
    type: "unprocessable",
    message: message ?? ""
  };
}