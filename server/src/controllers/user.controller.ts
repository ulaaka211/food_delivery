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

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      userImg: user.userImg,
      role: user.role,
    });
  } catch (err) {
    res.json(err);
  }
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    const {
      params: { _id },
      body: { name, email, phone, userImg, address },
    } = req;

    const userExists = await UserModel.findById(_id);

    if (!userExists) {
      return res.status(401).json({
        message: `Хэрэглэгч олдсонгүй`,
      });
    }

    const duplicaterUser = await UserModel.findOne({
      _id: { $ne: _id },
      $or: [{ email }, { phone }],
    });

    if (duplicaterUser) {
      return res.status(401).json({
        message: `${duplicaterUser} мэдээлэл давхцаж байна`,
      });
    }

    const updatedFields = {
      name,
      email,
      phone,
      userImg,
      address,
      updatedAt: new Date(),
    };

    await UserModel.findByIdAndUpdate(_id, updatedFields, { new: true });
    return res.json({ message: "Мэдээлэл амжилттай шинэчлэгдлээ" });
  } catch (error) {
    res.status(401).json(error);
  }
};
