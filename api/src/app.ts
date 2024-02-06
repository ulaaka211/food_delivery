import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { connectDatabase } from "./database";
import emailRouter from "./routers/Reset.router";
import { user } from "./controllers/user.controller";

const app = express();

connectDatabase();

app.use(cors());
app.use(express());
app.use(bodyParser.json());

app.use("/", authRouter);
app.use("/", user);

app.use("/foods", foodRouter);
app.use("/password", emailRouter);

export default app;
