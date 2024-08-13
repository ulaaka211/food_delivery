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
exports.filterByMonts = exports.filterByWeek = exports.filterByDay = exports.filterByDate = void 0;
const models_1 = require("../models");
const filterByDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            return res
                .status(400)
                .json({ message: "Start date and end date are required." });
        }
        const foods = yield models_1.FoodModel.find({
            createdAt: {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            },
        });
        return res.status(200).json(foods);
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "An error occurred while filtering foods by date." });
    }
});
exports.filterByDate = filterByDate;
const filterByDay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.query;
        if (!date) {
            return res
                .status(400)
                .json({ message: "Start date and end date are required." });
        }
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 1);
        const foods = yield models_1.FoodModel.find({
            createdAt: {
                $gte: start,
                $lt: end,
            },
        });
        return res.status(200).json(foods);
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "An error occurred while filtering foods by date." });
    }
});
exports.filterByDay = filterByDay;
const filterByWeek = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.query;
        if (!date) {
            return res
                .status(400)
                .json({ message: "Start date and end date are required." });
        }
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 7);
        const foods = yield models_1.FoodModel.find({
            createdAt: {
                $gte: start,
                $lt: end,
            },
        });
        return res.status(200).json(foods);
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "An error occurred while filtering foods by date." });
    }
});
exports.filterByWeek = filterByWeek;
const filterByMonts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.query;
        if (!date) {
            return res
                .status(400)
                .json({ message: "Start date and end date are required." });
        }
        const start = new Date(date);
        const end = new Date(date);
        end.setMonth(end.getMonth() + 1);
        const foods = yield models_1.FoodModel.find({
            createdAt: {
                $gte: start,
                $lt: end,
            },
        });
        return res.status(200).json(foods);
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "An error occurred while filtering foods by date." });
    }
});
exports.filterByMonts = filterByMonts;
