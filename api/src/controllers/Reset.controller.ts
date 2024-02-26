import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendemail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }

  const otpCode = Math.floor(Math.random() * 10000);

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
      text: `Нэг удаагын code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);

    const checkotb = await UserModel.updateOne(
      {
        _id: user.id,
      },
      { $set: { otp: otpCode } }
    );

    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const resetpass: RequestHandler = async (req, res) => {
  const { email, code, password } = req.body;
  // return res.json({ message: code });

  const user = await UserModel.findOne({ email: email, otp: code });

  if (!user) {
    return res.status(401).json({
      message: "Wrond otp",
    });
  }
  try {
    if (user.otp === code) {
    }

    const userPassword = await UserModel.updateOne({ password: password });

    res.json({ message: "Password updated!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// export const resetPassword: RequestHandler = async (req, res) => {
//   try {
//     const { email, password, otp } = req.body;
//     const user = await UserModel.findOne({ email });

//     if (!user) {
//       return res.status(401).json({
//         message: "Хэрэглэгч олдсонгүй, и-мэйлээ дахин шалгана уу!",
//       });
//     }

//     const userOTP = user?.otp;

//     if (userOTP != otp) {
//       return res.status(401).json({
//         message: "Нэг удаагийн код буруу байна.",
//       });
//     }

//     const updateUser = await UserModel.findOneAndUpdate(
//       { _id: user._id },
//       {
//         password: password,
//         updatedAt: new Date(),
//       }
//     );
//     res.json({ message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
//   } catch (err) {
//     res.json(err);
//   }
// };
