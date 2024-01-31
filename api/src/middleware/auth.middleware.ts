import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";
import { type } from "os";

type Payload = {
  userId: String;
};

export const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }

  try {
    const { userId } = jwt.verify(authorization, "secret") as Payload;

    // req.userId = userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }
};
