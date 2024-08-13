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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.temporaryAdminMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const temporaryAdminMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }
    try {
        const { role } = jsonwebtoken_1.default.verify(authorization, "temporaryAdmin-key");
        if (role !== "temporaryAdmin") {
            return res.status(403).json({
                message: "Forbidden: You do not have admin privileges",
            });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid",
        });
    }
});
exports.temporaryAdminMiddleware = temporaryAdminMiddleware;
