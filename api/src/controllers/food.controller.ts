import { RequestHandler } from "express";
import { FoodModel, categoryModel } from "../models";

export const createFood: RequestHandler = async (req, res) => {
  const { name, price, discount, foodimg, ingredients } = req.body;

  try {
    const foodCheck = await FoodModel.find({
      name,
      price,
      discount,
      foodimg,
      ingredients,
    });

    if (foodCheck.length) {
      return res.status(401).json({
        message: `${name} Хоол өмнө нь бүртгэгдсэн байна`,
      });
    }

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

export const getFood: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await categoryModel.find({});
  return res.json(categories);
};

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { foodCategory } = req.body;

    const categoryCheck = await categoryModel.find({ foodCategory });

    if (categoryCheck.length) {
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
