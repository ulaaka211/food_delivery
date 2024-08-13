"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFood = exports.deleteFood = exports.updateFood = exports.createFood = void 0;
const models_1 = require("../models");
// CRUD Food
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodName, price, discount, foodImg, ingredients, category } = req.body;
    try {
        const foodCheck = yield models_1.FoodModel.findOne({
            foodName,
        });
        if (foodCheck) {
            return res.status(401).json({
                message: `${foodName} Хоол өмнө нь бүртгэгдсэн байна`,
            });
        }
        yield models_1.FoodModel.create({
            foodName,
            price,
            discount,
            foodImg,
            ingredients,
            category,
            createdAt: new Date(),
        });
        return res.json({ message: "Хоол амжилттай үүслээ " });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.createFood = createFood;
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { foodName, price, discount, foodImg, ingredients, category } = req.body;
        const checkFood = yield models_1.FoodModel.findById(_id);
        if (!checkFood) {
            return res.status(401).json({
                message: `Хоол олдсонгүй`,
            });
        }
        const duplicateFood = yield models_1.UserModel.findOne({
            _id: { $ne: _id },
            foodName,
        });
        if (duplicateFood) {
            return res.status(401).json({
                message: `${foodName} нэр давхцаж байна`,
            });
        }
        const updatedFields = {
            foodName,
            price,
            discount,
            foodImg,
            ingredients,
            category,
            updatedAt: new Date(),
        };
        yield models_1.UserModel.findByIdAndUpdate(_id, updatedFields, { new: true });
        return res.json({ message: "Хоол амжилттай шинэчлэгдлээ" });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updateFood = updateFood;
const deleteFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const checkFood = yield models_1.FoodModel.findByIdAndDelete(_id);
        if (!checkFood) {
            return res.status(401).json({
                message: `Хоол олдсонгүй`,
            });
        }
        return res.json({ message: "Хоол амжилттай устлаа" });
    }
    catch (error) {
        res.status(401).json({ message: `sdarararr ${error}` });
    }
});
exports.deleteFood = deleteFood;
const getFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield models_1.FoodModel.find({});
    res.json(foods);
});
exports.getFood = getFood;
