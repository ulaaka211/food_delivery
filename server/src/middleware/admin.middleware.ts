import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

type Payload = {
  role: string;
};

export const adminMiddleware: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  try {
    const { role } = jwt.verify(authorization, "secret-key") as Payload;

    if (role !== "admin") {
      return res.status(403).json({
        message: "Forbidden: You do not have admin privileges",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid",
    });
  }
};
