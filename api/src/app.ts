import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { connectDatabase } from "./database";
import userRouter from "./routers/user.router";
import emailRouter from "./routers/Reset.router";

const app = express();

connectDatabase();

app.use(cors());
app.use(express());
app.use(bodyParser.json());
app.use("/", authRouter);
app.use("/", userRouter);
app.use("/foods", foodRouter);
app.use("/", emailRouter);

export default app;
