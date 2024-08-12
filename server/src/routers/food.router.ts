import { Router } from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFood,
} from "../controllers/food.controller";

const foodRouter = Router();

foodRouter
  .post("/createFood", createFood)
  .put("/updateFood/:_id", updateFood)
  .delete("/deleteFood/:_id", deleteFood)
  .get("/getFood", getFood);

export default foodRouter;
