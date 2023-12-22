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
exports.bot = void 0;
const commands_1 = require("./shared/consts/commands");
const actions_1 = require("./actions");
const deniss_server_1 = require("./resources/deniss-server");
const endpoints_1 = require("./resources/deniss-server/endpoints");
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
exports.bot = new TelegramBot(process.env.API_KEY_BOT, {
    polling: {
        interval: 300,
        autoStart: true
    }
});
exports.bot.setMyCommands(commands_1.MENU);
exports.bot.on("polling_error", (err) => console.log(err));
exports.bot.on('text', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, actions_1.messageLogAction)(msg);
        // CHECK PERMISSION BLOCK
        const user = yield (0, deniss_server_1.denissBotResource)({ path: endpoints_1.denissServerEndpoints.users.one, params: { username: msg.from.username } });
        yield (0, actions_1.checkPermissionAction)(msg, user);
        if (msg.text.includes('/yagpt') || msg.text === commands_1.yagptMenuItem.command) {
            yield (0, actions_1.yagptAction)(msg);
        }
        // SIMPLE COMMANDS
        switch (msg.text) {
            case commands_1.startMenuItem.command:
                yield (0, actions_1.startAction)(msg);
                break;
            case commands_1.manorLordTimerMenuItem.command:
                yield (0, actions_1.manorLordsTimerAction)(msg);
                break;
            case commands_1.setGeoMenuItem.command:
                yield (0, actions_1.setGeoAction)(msg);
                break;
            case commands_1.setTimeWeatherMessage.command:
                yield (0, actions_1.setTimeWeatherMessageAction)(msg);
                break;
        }
    }
    catch (err) {
        console.log(err);
    }
}));
exports.bot.on('location', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, actions_1.setGeoAction)(msg);
    }
    catch (err) {
        console.log(err);
    }
}));
//# sourceMappingURL=index.js.map