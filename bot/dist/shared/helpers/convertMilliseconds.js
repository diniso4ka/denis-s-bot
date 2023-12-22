"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMilliseconds = void 0;
function convertMilliseconds(milliseconds) {
    const seconds = Math.floor((milliseconds / (1000)) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    return `${days}д ${hours}ч ${minutes}м ${seconds}c`;
}
exports.convertMilliseconds = convertMilliseconds;
//# sourceMappingURL=convertMilliseconds.js.map