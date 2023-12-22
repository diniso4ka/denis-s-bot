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
exports.yagptAction = void 0;
const yagpt_1 = require("../resources/yagpt");
const index_1 = require("../index");
const commands_1 = require("../shared/consts/commands");
const endpoints_1 = require("../resources/yagpt/endpoints");
const yagptAction = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (msg.text === commands_1.yagptMenuItem.command) {
        yield index_1.bot.sendMessage(msg.chat.id, 'Для сообщения в Yandex GPT, напишите свой вопрос с припиской /yagpt');
    }
    if (msg.text.includes('/yagpt')) {
        const text = msg.text.replace('/yagpt', '');
        if (!text) {
            return yield index_1.bot.sendMessage(msg.chat.id, 'Осел вопрос напиши с припиской /yagpt (example: /yagpt Почему я не ты?)');
        }
        const res = yield (0, yagpt_1.yagptResource)({ path: endpoints_1.yagptEndpoints.v1.completion, params: { text } });
        console.info(res.data);
        yield index_1.bot.sendMessage(msg.chat.id, (_a = res.result) === null || _a === void 0 ? void 0 : _a.alternatives[0].message.text);
    }
});
exports.yagptAction = yagptAction;
//# sourceMappingURL=yagpt.js.map