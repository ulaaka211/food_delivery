import { Router } from "express";
import { Login, SignUp } from "../controllers";

const authRouter = Router();

//Post request
authRouter.post("/signup", SignUp).post("/login", Login);

//Get request

export default authRouter;
