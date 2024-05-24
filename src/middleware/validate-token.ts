import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config();

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export function validateToken(
  request: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication required. Private key is missing." });
  }

  jwt.verify(token, process.env.SECRETE_KEY ?? "", (err, decoded: any) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Invalid token. Please log in again." });
    }

    request.user = decoded;
    next();
  });
}
