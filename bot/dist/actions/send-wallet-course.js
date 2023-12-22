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
exports.sendWalletCourseAction = void 0;
const index_1 = require("../index");
const date_fns_1 = require("date-fns");
const users_with_permissions_1 = require("../shared/consts/users-with-permissions");
const cbr_1 = require("../resources/cbr");
const endpoints_1 = require("../resources/cbr/endpoints");
const MESSAGE_TIME = '21:33';
const sendWalletCourseAction = () => __awaiter(void 0, void 0, void 0, function* () {
    let wasSend = false;
    setInterval(() => {
        users_with_permissions_1.USERS_WITH_PERMISSIONS.forEach((user) => __awaiter(void 0, void 0, void 0, function* () {
            if (MESSAGE_TIME === (0, date_fns_1.format)(new Date(), 'HH:mm') && !wasSend) {
                const response = yield (0, cbr_1.cbrResource)({ path: endpoints_1.cbrEndpoints.daily });
                index_1.bot.sendMessage('', response.Valute.USD);
                wasSend = true;
            }
            else if (MESSAGE_TIME !== (0, date_fns_1.format)(new Date(), 'HH:mm')) {
                wasSend = false;
            }
        }));
    }, 1000);
});
exports.sendWalletCourseAction = sendWalletCourseAction;
//# sourceMappingURL=send-wallet-course.js.map