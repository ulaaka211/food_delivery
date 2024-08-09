import { Router } from "express";
import { adminMiddleware } from "../middleware/admin.middleware";

const adminRouter = Router();

adminRouter.use(adminMiddleware);

export default adminRouter;
