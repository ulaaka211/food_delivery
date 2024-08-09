import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { connectDatabase } from "./database";
import userRouter from "./routers/user.router";
import emailRouter from "./routers/reset.router";

const app = express();

connectDatabase();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/email", emailRouter);

export default app;
