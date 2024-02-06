import { Schema, model } from "mongoose";

const otpSchema = new Schema({
  coder: {
    type: String,
    required: false,
  },
});

export const OtpModel = model("otp", otpSchema);
