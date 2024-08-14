import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { connectDatabase } from "./database";
import userRouter from "./routers/user.router";
import emailRouter from "./routers/reset.router";
import temporarAdminRouter from "./routers/temporaryAdmin.router";
import { authMiddleware, eitherAdminOrTemporaryAdmin } from "./middleware";
import categoryRouter from "./routers/category.router";
import foodFilterRouter from "./routers/foodFilter.router";
import orderRouter from "./routers/order.router";
import { getCategories, getFood } from "./controllers";

const app = express();

connectDatabase();

app.use(cors());
app.use(bodyParser.json());

app.get("/getFood", getFood);
app.get("/getCategory", getCategories);
app.use("/email", emailRouter);
app.use("/auth", authRouter);
app.use("/temporary", temporarAdminRouter);
app.use("/user", authMiddleware, userRouter);
app.use("/food", eitherAdminOrTemporaryAdmin, foodRouter);
app.use("/category", eitherAdminOrTemporaryAdmin, categoryRouter);
app.use("/filter", foodFilterRouter);
app.use("/order", orderRouter);

export default app;
