import { Router } from "express";
import { createFood, getAllFoods } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.get("/", getAllFoods).get("/create", createFood);

export default foodRouter;
