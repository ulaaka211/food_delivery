import { Router } from "express";
import { user } from "../controllers/user.controller";

const userRouter = Router();

//Post request
userRouter.get("/user", user);

export default userRouter;
