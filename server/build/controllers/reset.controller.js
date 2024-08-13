"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const models_1 = require("../models");
const otp_generator_1 = __importDefault(require("otp-generator"));
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield models_1.UserModel.findOne({ email });
    if (!user) {
        return res.status(401).json({
            message: "Хэрэглэгч олдсонгүй",
        });
    }
    const otp = otp_generator_1.default.generate(4, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });
    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = currentTime + 300;
    try {
        const transporter = nodemailer_1.default.createTransport({
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
        yield transporter.sendMail(mailOptions);
        yield models_1.UserModel.updateOne({
            _id: user.id,
        }, { $set: { otp: otp, otpExpiresIn: expirationTime } });
        res.json("Email sent!");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.sendEmail = sendEmail;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, otp } = req.body;
        const user = yield models_1.UserModel.findOne({ email, otp });
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
        yield models_1.UserModel.findOneAndUpdate({ email }, {
            password,
            updatedAt: new Date(),
            otp: null,
            otpExpiresIn: null,
        });
        res.json({ message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
    }
    catch (err) {
        res.json(err);
    }
});
exports.resetPassword = resetPassword;
