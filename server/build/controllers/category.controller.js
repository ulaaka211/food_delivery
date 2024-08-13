"use strict";
// CRUD Category
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
exports.getCategories = exports.deleteCategory = exports.updateCategory = exports.createCategory = void 0;
const models_1 = require("../models");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodCategory } = req.body;
        const categoryCheck = yield models_1.categoryModel.findOne({ foodCategory });
        if (categoryCheck) {
            return res.status(401).json({
                message: `${foodCategory} ангилал өмнө нь бүртгэгдсэн байна`,
            });
        }
        yield models_1.categoryModel.create({
            foodCategory,
            createdAt: new Date(),
        });
        return res.json({ message: "Шинэ ангилал амжилттай нэмэгдлээ" });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { foodCategory } = req.body;
        const checkCategory = yield models_1.categoryModel.findById(_id);
        if (!checkCategory) {
            return res.status(401).json({
                message: `Ангилал олдсонгүй`,
            });
        }
        const duplicateCategory = yield models_1.categoryModel.findOne({
            _id: { $ne: _id },
            foodCategory,
        });
        if (duplicateCategory) {
            return res.status(401).json({
                message: `${foodCategory} нэр давхцаж байна`,
            });
        }
        yield models_1.categoryModel.findByIdAndUpdate(_id, {
            foodCategory,
            updatedAt: new Date(),
        }, { new: true });
        return res.json({ message: "Ангилал амжилттай шинэчлэгдлээ" });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const checkCategory = yield models_1.categoryModel.findByIdAndDelete(_id);
        if (!checkCategory) {
            return res.status(401).json({
                message: `Ангилал олдсонгүй`,
            });
        }
        return res.json({ message: "Ангилал амжилттай устлаа" });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.deleteCategory = deleteCategory;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield models_1.categoryModel.find({});
    return res.json(categories);
});
exports.getCategories = getCategories;
