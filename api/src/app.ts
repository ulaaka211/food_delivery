import express from "express";
import cors from "cors";

import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { authMiddleware } from "./middleware/auth.middleware";

const app = express();

app.use(cors());
app.use(express());

app.use("/", authRouter);

app.use(authMiddleware);

app.use("/foods", foodRouter);

export default app;
