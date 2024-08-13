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
exports.updateUser = exports.getUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: "Unauthorized1" });
        }
        const { id } = jsonwebtoken_1.default.verify(authorization, "secret-key");
        const user = yield models_1.UserModel.findById(id);
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
    }
    catch (err) {
        res.json(err);
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { _id }, body: { name, email, phone, userImg, address }, } = req;
        const userExists = yield models_1.UserModel.findById(_id);
        if (!userExists) {
            return res.status(401).json({
                message: `Хэрэглэгч олдсонгүй`,
            });
        }
        const duplicaterUser = yield models_1.UserModel.findOne({
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
        yield models_1.UserModel.findByIdAndUpdate(_id, updatedFields, { new: true });
        return res.json({ message: "Мэдээлэл амжилттай шинэчлэгдлээ" });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updateUser = updateUser;
