"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Components_1 = __importDefault(require("../../Components"));
function default_1(...extend) {
    return Components_1.default.baseEditForm([
        {
            key: 'data',
            ignore: true
        },
        {
            key: 'validation',
            ignore: true
        }
    ], ...extend);
}
exports.default = default_1;
