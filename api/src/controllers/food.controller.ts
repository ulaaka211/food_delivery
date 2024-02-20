import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const createfood: RequestHandler = async (req, res) => {
  res.json();
};

export const getallfoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};
