import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";

type Payload = {
  id: String;
};

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }

  try {
    const { id } = jwt.verify(authorization, "secret-key") as Payload;

    const user = await UserModel.findById(id);

    if (!user) {
      return res.json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }
};
