import { Schema, model } from "mongoose";

const otpSchema = new Schema({
  password: {
    type: String,
    required: false,
  },
});

export const OtpModel = model("otp", otpSchema);