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
exports.manorLordsTimerAction = void 0;
const convertMilliseconds_1 = require("../shared/helpers/convertMilliseconds");
const index_1 = require("../index");
const manorLordsTimerAction = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const releaseDate = new Date('April 26, 2024');
    const releaseDateInSeconds = releaseDate.getTime();
    const currentDateInSeconds = new Date().getTime();
    const difference = releaseDateInSeconds - currentDateInSeconds;
    yield index_1.bot.sendMessage(msg.chat.id, (0, convertMilliseconds_1.convertMilliseconds)(difference));
});
exports.manorLordsTimerAction = manorLordsTimerAction;
//# sourceMappingURL=manor-lords-timer.js.map