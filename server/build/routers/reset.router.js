"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const emailRouter = (0, express_1.Router)();
emailRouter.post("/sendEmail", controllers_1.sendEmail).post("/resetPassword", controllers_1.resetPassword);
exports.default = emailRouter;
