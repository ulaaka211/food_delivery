"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_router_1 = __importDefault(require("./auth.router"));
const food_router_1 = __importDefault(require("./food.router"));
const user_router_1 = __importDefault(require("./user.router"));
const reset_router_1 = __importDefault(require("./reset.router"));
const temporaryAdmin_router_1 = __importDefault(require("./temporaryAdmin.router"));
const category_router_1 = __importDefault(require("./category.router"));
exports.default = {
    authRouter: auth_router_1.default,
    foodRouter: food_router_1.default,
    userRouter: user_router_1.default,
    emailRouter: reset_router_1.default,
    temporaryAdmin: temporaryAdmin_router_1.default,
    categoryRouter: category_router_1.default,
};
