"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unknown_edit_display_1 = __importDefault(require("./editForm/Unknown.edit.display"));
function default_1() {
    return {
        components: [
            {
                type: 'tabs',
                key: 'tabs',
                components: [
                    {
                        label: 'Custom',
                        key: 'display',
                        weight: 0,
                        components: Unknown_edit_display_1.default
                    }
                ]
            }
        ]
    };
}
exports.default = default_1;
