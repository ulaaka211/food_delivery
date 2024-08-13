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

const app = express();

connectDatabase();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/temporary", temporarAdminRouter);
app.use("/user", authMiddleware, userRouter);
app.use("/food", eitherAdminOrTemporaryAdmin, foodRouter);
app.use("filter", foodFilterRouter);
app.use("/category", eitherAdminOrTemporaryAdmin, categoryRouter);
app.use("/email", emailRouter);

export default app;
