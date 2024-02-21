import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

// export const getUser: RequestHandler = async (req, res) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res.status(401).json({
//       message: "Couldn't get authorization",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");
//     const { id } = payload as JwtPayload;
//     const user = await UserModel.findOne({ _id: id });
//     return res.json(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized1" });
    }
    const { id: userId } = jwt.verify(
      authorization,
      "secret-key"
    ) as JwtPayload;
    console.log(userId);

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(401).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    return res.json(user);
  } catch (err) {
    res.json(err);
  }
};
