import { Router } from "express";
import { createfood, getallfoods } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.post("/createfood", createfood);

export default foodRouter;
