import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt = require("jsonwebtoken");

export const signup: RequestHandler = async (req, res) => {
  const { name, email, phone, address, password } = req.body;

  try {
    const usercheck = await UserModel.findOne({ email: email });

    if (usercheck) {
      return res.status(409).json({
        message: "Хэрэглэгч давхцаж байна",
      });
    }

    await UserModel.create({
      name,
      email,
      phone,
      address,
      password,
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (error) {
    return res.json(error);
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
    return res.json({ token, message: "Амжилттай нэвтэрлээ" });
  } catch (error) {
    return res.json(error);
  }
};
