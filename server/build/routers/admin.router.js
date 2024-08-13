"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_middleware_1 = require("../middleware/admin.middleware");
const adminRouter = (0, express_1.Router)();
adminRouter.use(admin_middleware_1.adminMiddleware);
exports.default = adminRouter;
