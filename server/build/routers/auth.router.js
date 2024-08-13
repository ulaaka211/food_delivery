"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const authRouter = (0, express_1.Router)();
//Post request
authRouter.post("/signup", controllers_1.signup).post("/login", controllers_1.login);
//Get request
exports.default = authRouter;
