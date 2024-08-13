"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const categoryRouter = (0, express_1.Router)();
categoryRouter
    .post("/createCategory", controllers_1.createCategory)
    .put("/updateCategory/:_id", controllers_1.updateCategory)
    .delete("/deleteCategory/:_id", controllers_1.deleteCategory)
    .get("/getCategory", controllers_1.getCategories);
exports.default = categoryRouter;
