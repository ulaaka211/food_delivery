import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  deliveryAddress: [
    {
      district: String,
      khoroo: String,
      bair: String,
      additional: String,
      phone: String,
      paymentMethod: String,
    },
  ],
  foods: [
    {
      foodName: String,
      category: String,
      ingredients: String,
      price: Number,
      discount: Number,
      foodImg: String,
      foodCount: Number,
    },
  ],

  deliveryStatus: {
    type: String,
    required: true,
  },

  deliveredAt: {
    type: Date,
    required: false,
  },
  createdAt: Date,
});
export const orderModel = model("order", orderSchema);
