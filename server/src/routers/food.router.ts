import { Router } from "express";
import {
  createCategory,
  createFood,
  deleteCategory,
  deleteFood,
  getCategories,
  getFood,
  updateCategory,
  updateFood,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .post("/createFood", createFood)
  .post("/createCategory", createCategory)
  .post("/updateCategory", updateCategory)
  .post("/updateFood", updateFood)
  .post("/deleteCategory", deleteCategory)
  .post("/deleteFood", deleteFood)
  .get("/getCategory", getCategories)
  .get("/getFood", getFood);

export default foodRouter;
