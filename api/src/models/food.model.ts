import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  foodimg: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: String,
    required: false,
    default: 0,
  },
  ingredients: {
    type: String,
    required: true,
  },
});

export const FoodModel = model("food", foodSchema);
