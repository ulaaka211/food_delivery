import { Router } from "express";
import { Login, SignUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("signup", SignUp).post("login", Login);

export default authRouter;
