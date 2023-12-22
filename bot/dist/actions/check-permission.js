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
exports.checkPermissionAction = void 0;
const index_1 = require("../index");
const checkPermissionAction = (msg, user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user) {
        index_1.bot.sendMessage(msg.chat.id, `Permission denied, для получения доступа отправьте @penaplast3104 {chatId: ${msg.chat.id}, username: ${msg.from.username}}`);
        throw new Error('permission denied');
    }
});
exports.checkPermissionAction = checkPermissionAction;
//# sourceMappingURL=check-permission.js.map