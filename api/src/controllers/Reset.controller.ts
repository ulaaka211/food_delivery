import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

type createOtpProps = {
  otp: String;
};

export const sendemail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "hereglegch oldsongui ",
    });
  }

  const otpCode = Math.floor(Math.random() * 100000);

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
      text: `neg udaagiin code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);
    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};
