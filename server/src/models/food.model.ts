import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  foodImg: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
  discountExpiresIn: {
    type: Number,
    required: false,
  },
  updatedAt: Date,
  createdAt: Date,
});

export const FoodModel = model("food", foodSchema);
