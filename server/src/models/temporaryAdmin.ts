import { Schema, model } from "mongoose";

const temporaryAdminSchema = new Schema({
  temporaryToken: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

export const TemporaryAdminModel = model(
  "temporaryAdmin",
  temporaryAdminSchema
);
