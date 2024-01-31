import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: String,
    required: true,
    default: 0,
  },
});

export const FoodModel = model("food", foodSchema);
