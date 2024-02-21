import { Router } from "express";
import {
  createCategory,
  createfood,
  getallfoods,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .post("/createfood", createfood)
  .post("/createCategory", createCategory);

export default foodRouter;
