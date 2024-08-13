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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const models_1 = require("../models");
const jwt = require("jsonwebtoken");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, address, password } = req.body;
    try {
        const usercheck = yield models_1.UserModel.findOne({ email: email });
        if (usercheck) {
            return res.status(409).json({
                message: "Хэрэглэгч давхцаж байна",
            });
        }
        yield models_1.UserModel.create({
            name,
            email,
            phone,
            address,
            password,
            createdAt: new Date(),
        });
        return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
    }
    catch (error) {
        return res.json(error);
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield models_1.UserModel.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                message: "E-mail буруу байна",
            });
        }
        const userpassword = yield models_1.UserModel.findOne({ password: password });
        if (!userpassword) {
            return res.status(401).json({
                message: "Нууц үг буруу байна",
            });
        }
        const id = user._id;
        const role = user.role;
        const token = jwt.sign({ id, role }, "secret-key");
        return res.json({ token, user, message: "Амжилттай нэвтэрлээ" });
    }
    catch (error) {
        return res.json(error);
    }
});
exports.login = login;
