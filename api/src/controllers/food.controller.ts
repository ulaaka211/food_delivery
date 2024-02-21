import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const createfood: RequestHandler = async (req, res) => {
  const { name, price, discount, foodimg, ingredients } = req.body;

  try {
    const food = await FoodModel.create({
      name,
      price,
      discount,
      foodimg,
      ingredients,
    });

    return res.json({ message: "Hool amjilttai uuslee" });
  } catch {}
};

export const getallfoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};
