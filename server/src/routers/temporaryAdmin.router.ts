import { Router } from "express";
import { temporaryAdmin } from "../controllers/temporaryAdmin.controller";

const temporarAdminRouter = Router();

temporarAdminRouter.post("/temporaryAdmin", temporaryAdmin);

export default temporarAdminRouter;
