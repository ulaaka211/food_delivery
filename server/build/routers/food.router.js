"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const food_controller_1 = require("../controllers/food.controller");
const foodRouter = (0, express_1.Router)();
foodRouter
    .post("/createFood", food_controller_1.createFood)
    .put("/updateFood/:_id", food_controller_1.updateFood)
    .delete("/deleteFood/:_id", food_controller_1.deleteFood)
    .get("/getFood", food_controller_1.getFood);
exports.default = foodRouter;
