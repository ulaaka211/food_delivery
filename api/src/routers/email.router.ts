import { Router } from "express";

import { sendEmail } from "../controllers";

const emailRouter = Router();

emailRouter.post("/email", sendEmail);

export default emailRouter;
