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
exports.setTimeWeatherMessageAction = void 0;
const index_1 = require("../index");
const commands_1 = require("../shared/consts/commands");
const setTimeWeatherMessageAction = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.text === commands_1.setTimeWeatherMessage.command) {
        index_1.bot.sendMessage(msg.chat.id, 'Напишите время в формате HH:mm (example- 12:00), для ежедневной рассылки прогноза погоды в вашем гео.');
        index_1.bot.sendMessage(msg.chat.id, 'WIP');
    }
});
exports.setTimeWeatherMessageAction = setTimeWeatherMessageAction;
//# sourceMappingURL=set-time-weather-message.js.map