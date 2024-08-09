import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const userRouter = Router();

//Get request
userRouter.get("/getUser", getUser);

export default userRouter;
