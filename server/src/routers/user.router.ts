import { Router } from "express";
import { getUser, updateUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/getUser", getUser).put("/updateUser/:_id", updateUser);

export default userRouter;
