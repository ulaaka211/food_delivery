"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temporaryAdmin_controller_1 = require("../controllers/temporaryAdmin.controller");
const temporarAdminRouter = (0, express_1.Router)();
temporarAdminRouter.post("/temporaryAdmin", temporaryAdmin_controller_1.temporaryAdmin);
exports.default = temporarAdminRouter;
