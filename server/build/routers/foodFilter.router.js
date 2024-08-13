"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foodFilter_controller_1 = require("../controllers/foodFilter.controller");
const foodFilterRouter = (0, express_1.Router)();
foodFilterRouter
    .get("/filterByDate", foodFilter_controller_1.filterByDate)
    .get("/filterByDay", foodFilter_controller_1.filterByDay)
    .get("/filterByWeek", foodFilter_controller_1.filterByWeek)
    .get("/filterByMonts", foodFilter_controller_1.filterByMonts);
exports.default = foodFilterRouter;
