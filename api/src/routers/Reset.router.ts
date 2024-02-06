import { Router } from "express";
import { SendEmail } from "../controllers/Reset.controller";

const emailRouter = Router();

emailRouter.post("/email", SendEmail);

export default emailRouter;
