import { RequestHandler } from "express";
import { FoodModel, categoryModel } from "../models";

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
  const {
    foodName,
    price,
    discount,
    foodImg,
    ingredients,
    category,
    editFood,
  } = req.body;

  const checkFood = await FoodModel.findOne({
    foodName: editFood,
  });

  if (!checkFood) {
    return res.status(401).json({
      message: `Хоол олдсонгүй`,
    });
  }

  try {
    await FoodModel.findOneAndUpdate(
      {
        _id: checkFood._id,
      },
      {
        foodName,
        price,
        discount,
        foodImg,
        ingredients,
        category,
        updatedAt: new Date(),
      }
    );

    return res.json({ message: "Хоол амжилттай шинэчлэгдлээ" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteFood: RequestHandler = async (req, res) => {
  try {
    const { deleteFood } = req.body;

    const checkFood = await FoodModel.findOne({ foodName: deleteFood });

    if (!checkFood) {
      return res.status(401).json({
        message: `Хоол олдсонгүй`,
      });
    }

    await FoodModel.findByIdAndDelete(checkFood._id);

    return res.json({ message: "Хоол амжилттай устлаа" });
  } catch (error) {
    res.status(401).json({ message: `sdarararr ${error}` });
  }
};

// CRUD Category

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { foodCategory } = req.body;

    const categoryCheck = await categoryModel.findOne({ foodCategory });

    if (categoryCheck) {
      return res.status(401).json({
        message: `${foodCategory} ангилал өмнө нь бүртгэгдсэн байна`,
      });
    }

    await categoryModel.create({
      foodCategory,
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ ангилал амжилттай нэмэгдлээ" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateCategory: RequestHandler = async (req, res) => {
  try {
    const { editCategory, newCategory } = req.body;

    const checkCategory = await categoryModel.findOne({
      foodCategory: editCategory,
    });

    if (!checkCategory) {
      return res.status(401).json({
        message: `Ангилал олдсонгүй`,
      });
    }

    await categoryModel.findOneAndUpdate(
      { _id: checkCategory._id },
      {
        foodCategory: newCategory,
        updatedAt: new Date(),
      }
    );

    return res.json({ message: "Ангилал амжилттай шинэчлэгдлээ" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const { deleteCategory } = req.body;

    const checkCategory = await categoryModel.findOne({
      foodCategory: deleteCategory,
    });

    if (!checkCategory) {
      return res.status(401).json({
        message: `Хоол олдсонгүй`,
      });
    }

    await categoryModel.findByIdAndDelete(checkCategory._id);

    return res.json({ message: "Хоол амжилттай устлаа" });
  } catch (error) {
    res.status(401).json(error);
  }
};
// Get Request

export const getFood: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await categoryModel.find({});
  return res.json(categories);
};
