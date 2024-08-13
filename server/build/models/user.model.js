"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userImg: {
        type: String,
        required: true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    otp: {
        type: String,
        required: false,
    },
    otpExpiresIn: {
        type: Number,
        required: false,
    },
    role: {
        type: String,
        required: true,
        default: "user",
    },
    updatedAt: Date,
    createdAt: Date,
});
exports.UserModel = (0, mongoose_1.model)("user", userSchema);
