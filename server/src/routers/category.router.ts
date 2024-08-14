import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers";

const categoryRouter = Router();

categoryRouter
  .post("/createCategory", createCategory)
  .put("/updateCategory/:_id", updateCategory)
  .delete("/deleteCategory/:_id", deleteCategory);

export default categoryRouter;
