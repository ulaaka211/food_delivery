"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const app_1 = __importDefault(require("./app"));
const port = 3010;
(0, database_1.connectDatabase)();
app_1.default.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
