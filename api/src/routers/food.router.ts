import { Router } from "express";
import {
  createCategory,
  createfood,
  getCategories,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .post("/createfood", createfood)
  .post("/createCategory", createCategory)
  .get("/getCategory", getCategories);

export default foodRouter;
