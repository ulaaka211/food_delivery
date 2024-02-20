import { Router } from "express";
import { createfood, getallfoods } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.get("/getallfoods", getallfoods).get("/createfood", createfood);

export default foodRouter;
