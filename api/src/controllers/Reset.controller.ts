import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";
import otpGenerator from "otp-generator";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }

  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  const currentTime = Math.floor(Date.now() / 1000);
  const expirationTime = currentTime + 300;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "uulaaka73@gmail.com",
        pass: "utrhxcutldbgdjuk",
      },
    });
    const mailOptions = {
      from: "uulaaka73@gmail.com",
      to: email,
      subject: "from Food Delivery",
      text: `Нэг удаагын code: ${otp}`,
    };
    await transporter.sendMail(mailOptions);

    await UserModel.updateOne(
      {
        _id: user.id,
      },
      { $set: { otp: otp, otpExpiresIn: expirationTime } }
    );

    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const resetPassword: RequestHandler = async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    const user = await UserModel.findOne({ email, otp });

    if (!user) {
      return res.status(401).json({
        message: "Нэг удаагын код буруу байна",
      });
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (user.otpExpiresIn != null && user.otpExpiresIn < currentTime) {
      return res
        .status(401)
        .json({ message: "Нэг удаагын кодны хугацаа дууссан байна" });
    }

    await UserModel.findOneAndUpdate(
      { email },
      {
        password,
        updatedAt: new Date(),
        otp: null,
        otpExpiresIn: null,
      }
    );
    res.json({ message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
  } catch (err) {
    res.json(err);
  }
};
