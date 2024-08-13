"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporaryAdminModel = void 0;
const mongoose_1 = require("mongoose");
const temporaryAdminSchema = new mongoose_1.Schema({
    temporaryToken: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
});
exports.TemporaryAdminModel = (0, mongoose_1.model)("temporaryAdmin", temporaryAdminSchema);
