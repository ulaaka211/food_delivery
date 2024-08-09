import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized1" });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(401).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    return res.json(user);
  } catch (err) {
    res.json(err);
  }
};
