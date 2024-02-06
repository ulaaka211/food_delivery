import { Router } from "express";
import { sendemail } from "../controllers/Reset.controller";

const emailRouter = Router();

emailRouter.post("/email", sendemail);

export default emailRouter;
