import { Router } from "express";
import { sendemail } from "../controllers/reset.controller";

const emailRouter = Router();

emailRouter.post("/sendemail", sendemail);

export default emailRouter;
