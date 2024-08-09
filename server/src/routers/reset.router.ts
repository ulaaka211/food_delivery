import { Router } from "express";
import { resetPassword, sendEmail } from "../controllers";

const emailRouter = Router();

emailRouter.post("/sendEmail", sendEmail).post("/resetPassword", resetPassword);

export default emailRouter;
