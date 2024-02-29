import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt = require("jsonwebtoken");

export const signup: RequestHandler = async (req, res) => {
  const { name, email, address, password } = req.body;

  try {
    const usercheck = await UserModel.findOne({ email: email });

    if (usercheck) {
      return res.status(409).json({
        message: "Хэрэглэгч давхцаж байна",
      });
    }
    const defaultRole = "user";
    const defaultImg =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const user = await UserModel.create({
      name,
      email,
      address,
      password,
      userImg: defaultImg,
      role: defaultRole,
    });

    return res.json(user);
  } catch (error) {
    res.json(error);
  }
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        message: "E-mail буруу байна",
      });
    }

    const userpassword = await UserModel.findOne({ password: password });

    if (!userpassword) {
      return res.status(401).json({
        message: "Нууц үг буруу байна",
      });
    }

    const id = user._id;
    const role = user.role;
    const token = jwt.sign({ id, role }, "secret-key");
    res.json({ token, user });
  } catch (error) {
    res.json(error);
  }
};
