import { Router } from "express";
import {
  createCategory,
  createFood,
  getCategories,
  getFood,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .post("/createFood", createFood)
  .post("/createCategory", createCategory)
  .get("/getCategory", getCategories)
  .get("/getFood", getFood);

export default foodRouter;
