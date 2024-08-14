import { Router } from "express";
import {
  changeOrderStatus,
  getAllOrders,
  createOrder,
  getOrderList,
} from "../controllers/order.controller";

const orderRouter = Router();

orderRouter
  .get("/getAllOrders", getAllOrders)
  .get("/getOrderList", getOrderList)
  .post("/createOrder", createOrder)
  .post("/changeOrderStatus", changeOrderStatus);

export default orderRouter;
