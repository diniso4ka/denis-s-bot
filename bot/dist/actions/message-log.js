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
exports.messageLogAction = void 0;
const index_1 = require("../index");
require('dotenv').config();
const DENIS_SECOND_ACC_ID = process.env.DENIS_SECOND_ACC_ID;
const messageLogAction = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    yield index_1.bot.sendMessage(DENIS_SECOND_ACC_ID, `Пользователь @${msg.from.username} отправил сообщение:\n` +
        '\n' +
        `${msg.text}`);
});
exports.messageLogAction = messageLogAction;
//# sourceMappingURL=message-log.js.map