import { Router } from "express";
import { login, signup } from "../controllers";

const authRouter = Router();

//Post request
authRouter.post("/signup", signup).post("/login", login);

//Get request

export default authRouter;
