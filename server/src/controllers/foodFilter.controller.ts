import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const filterByDate: RequestHandler = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "Start date and end date are required." });
    }

    const foods = await FoodModel.find({
      createdAt: {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      },
    });

    return res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while filtering foods by date." });
  }
};

export const filterByDay: RequestHandler = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res
        .status(400)
        .json({ message: "Start date and end date are required." });
    }

    const start = new Date(date as string);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);

    const foods = await FoodModel.find({
      createdAt: {
        $gte: start,
        $lt: end,
      },
    });

    return res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while filtering foods by date." });
  }
};

export const filterByWeek: RequestHandler = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res
        .status(400)
        .json({ message: "Start date and end date are required." });
    }

    const start = new Date(date as string);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);

    const foods = await FoodModel.find({
      createdAt: {
        $gte: start,
        $lt: end,
      },
    });

    return res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while filtering foods by date." });
  }
};

export const filterByMonts: RequestHandler = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res
        .status(400)
        .json({ message: "Start date and end date are required." });
    }

    const start = new Date(date as string);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);

    const foods = await FoodModel.find({
      createdAt: {
        $gte: start,
        $lt: end,
      },
    });

    return res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while filtering foods by date." });
  }
};
