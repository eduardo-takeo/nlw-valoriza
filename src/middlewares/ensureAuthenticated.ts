import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Get token
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  // Validate token
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "aa9a2214f6b2724610a04cdac5fcb0cc"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (e) {
    return response.status(401).end();
  }
}
