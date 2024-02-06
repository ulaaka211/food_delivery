import { RequestHandler } from "express";
import { UserModel } from "../models";

export const SignUp: RequestHandler = async (req, res) => {
  const { name, email, address, password } = req.body;

  const user = await UserModel.create({
    name,
    email,
    address,
    password,
  });

  return res.json(user);
};

export const Login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.create({
    email,
    password,
  });

  if (!user) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }

  return res.json(user);
};
