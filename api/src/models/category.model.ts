import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  foodCategory: {
    type: String,
    required: true,
  },
});

export const categoryModel = model("category", categorySchema);
