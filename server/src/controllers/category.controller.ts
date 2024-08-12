// CRUD Category

import { RequestHandler } from "express";
import { categoryModel } from "../models";

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
    const { _id } = req.params;
    const { foodCategory } = req.body;

    const checkCategory = await categoryModel.findById(_id);

    if (!checkCategory) {
      return res.status(401).json({
        message: `Ангилал олдсонгүй`,
      });
    }

    const duplicateCategory = await categoryModel.findOne({
      _id: { $ne: _id },
      foodCategory,
    });

    if (duplicateCategory) {
      return res.status(401).json({
        message: `${foodCategory} нэр давхцаж байна`,
      });
    }

    await categoryModel.findByIdAndUpdate(
      _id,
      {
        foodCategory,
        updatedAt: new Date(),
      },
      { new: true }
    );

    return res.json({ message: "Ангилал амжилттай шинэчлэгдлээ" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;

    const checkCategory = await categoryModel.findByIdAndDelete(_id);

    if (!checkCategory) {
      return res.status(401).json({
        message: `Ангилал олдсонгүй`,
      });
    }

    return res.json({ message: "Ангилал амжилттай устлаа" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await categoryModel.find({});
  return res.json(categories);
};
