import { Router } from "express";
import { resetpass, sendemail } from "../controllers";

const emailRouter = Router();

emailRouter.post("/sendemail", sendemail).post("/resetpass", resetpass);

export default emailRouter;
