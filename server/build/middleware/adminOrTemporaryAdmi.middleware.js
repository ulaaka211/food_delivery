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
exports.eitherAdminOrTemporaryAdmin = void 0;
const admin_middleware_1 = require("./admin.middleware");
const temporayAdmin_middleware_1 = require("./temporayAdmin.middleware");
const eitherAdminOrTemporaryAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, admin_middleware_1.adminMiddleware)(req, res, (err) => {
        if (!err) {
            return next();
        }
        (0, temporayAdmin_middleware_1.temporaryAdminMiddleware)(req, res, (err) => {
            if (!err) {
                return next();
            }
            return res.status(403).json({
                message: "Access denied. Admin or TemporaryAdmin role required.",
            });
        });
    });
});
exports.eitherAdminOrTemporaryAdmin = eitherAdminOrTemporaryAdmin;
