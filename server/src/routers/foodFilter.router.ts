import { Router } from "express";
import {
  filterByDate,
  filterByDay,
  filterByMonts,
  filterByWeek,
} from "../controllers/foodFilter.controller";

const foodFilterRouter = Router();

foodFilterRouter
  .get("/filterByDate", filterByDate)
  .get("/filterByDay", filterByDay)
  .get("/filterByWeek", filterByWeek)
  .get("/filterByMonts", filterByMonts);

export default foodFilterRouter;
