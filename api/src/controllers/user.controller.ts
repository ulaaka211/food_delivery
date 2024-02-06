import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

export const user: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Couldn't get authorization",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");
    const { id } = payload as JwtPayload;
    const user = UserModel.find({ _id: id });
    return res.json({ user });
  } catch (error) {
    console.log(error);
  }
};
