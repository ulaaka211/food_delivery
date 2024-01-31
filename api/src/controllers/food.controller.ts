import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const createFood: RequestHandler = async (req, res) => {
  const pizza = await FoodModel.create({
    name: "Pizza",
    price: 30,
  });

  res.json(pizza);
};
