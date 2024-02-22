import { Router } from "express";
import { sendemail } from "../controllers";

const emailRouter = Router();

emailRouter.post("/sendemail", sendemail);

export default emailRouter;
