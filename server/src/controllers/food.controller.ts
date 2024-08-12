import { RequestHandler } from "express";
import { FoodModel, UserModel, categoryModel } from "../models";

// CRUD Food

export const createFood: RequestHandler = async (req, res) => {
  const { foodName, price, discount, foodImg, ingredients, category } =
    req.body;

  try {
    const foodCheck = await FoodModel.findOne({
      foodName,
    });

    if (foodCheck) {
      return res.status(401).json({
        message: `${foodName} Хоол өмнө нь бүртгэгдсэн байна`,
      });
    }

    await FoodModel.create({
      foodName,
      price,
      discount,
      foodImg,
      ingredients,
      category,
      createdAt: new Date(),
    });

    return res.json({ message: "Хоол амжилттай үүслээ " });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateFood: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const { foodName, price, discount, foodImg, ingredients, category } =
      req.body;

    const checkFood = await FoodModel.findById(_id);

    if (!checkFood) {
      return res.status(401).json({
        message: `Хоол олдсонгүй`,
      });
    }

    const duplicateFood = await UserModel.findOne({
      _id: { $ne: _id },
      foodName,
    });

    if (duplicateFood) {
      return res.status(401).json({
        message: `${foodName} нэр давхцаж байна`,
      });
    }

    const updatedFields = {
      foodName,
      price,
      discount,
      foodImg,
      ingredients,
      category,
    };

    await UserModel.findByIdAndUpdate(
      _id,
      { updatedFields, updatedAt: new Date() },
      { new: true }
    );

    return res.json({ message: "Хоол амжилттай шинэчлэгдлээ" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteFood: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;

    const checkFood = await FoodModel.findByIdAndDelete(_id);

    if (!checkFood) {
      return res.status(401).json({
        message: `Хоол олдсонгүй`,
      });
    }

    return res.json({ message: "Хоол амжилттай устлаа" });
  } catch (error) {
    res.status(401).json({ message: `sdarararr ${error}` });
  }
};

export const getFood: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};
