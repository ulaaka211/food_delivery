import { RequestHandler } from "express";
import { FoodModel, categoryModel } from "../models";

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

    return res.json({ message: "Хоол амжилттай үүслээ " });
  } catch {}
};

export const getallfoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { foodCategory } = req.body;

    const categorycheck = await categoryModel.find({ foodCategory });

    if (categorycheck.length) {
      return res.status(401).json({
        message: `${foodCategory} ангилал өмнө нь бүртгэгдсэн байна`,
      });
    }
    const food = await categoryModel.create({
      foodCategory,
    });
    return res.json({ message: "Шинэ ангилал амжилттай нэмэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};
