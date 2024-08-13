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
exports.temporaryAdmin = void 0;
const jwt = require("jsonwebtoken");
const temporaryAdmin_1 = require("../models/temporaryAdmin");
const temporaryAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = "temporaryAdmin";
        const temporaryToken = jwt.sign({ role }, "temporaryAdmin-key", {
            expiresIn: "10m",
        });
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
        const temporaryAdminModel = new temporaryAdmin_1.TemporaryAdminModel({
            temporaryToken,
            role,
            expiresAt,
        });
        yield temporaryAdminModel.save();
        res.json({ temporaryToken, role });
    }
    catch (error) {
        res.json(error);
    }
});
exports.temporaryAdmin = temporaryAdmin;
setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield temporaryAdmin_1.TemporaryAdminModel.deleteMany({ expiresAt: { $lt: new Date() } });
    }
    catch (error) {
        console.error("aldaa", error);
    }
}), 5 * 60 * 1000);
