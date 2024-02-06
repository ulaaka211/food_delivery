import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { authMiddleware } from "./middleware/auth.middleware";
import { connectDatabase } from "./database";
import emailRouter from "./routers/email.router";

const app = express();

connectDatabase();

app.use(cors());
app.use(express());
app.use(bodyParser.json());

app.use("/", authRouter);

// app.use(authMiddleware);

app.use("/foods", foodRouter);
app.use("/password", emailRouter);

export default app;
