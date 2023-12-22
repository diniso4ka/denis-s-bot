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
exports.cbrResource = void 0;
const endpoints_1 = require("./endpoints");
const fetch_wIth_host_1 = require("../../shared/helpers/fetch-wIth-host");
require('dotenv').config();
const HOST = process.env.CBR_API_HOST || '';
const fetchWithHost = (0, fetch_wIth_host_1.getFetchWithHost)(HOST);
function cbrResource({ path, params }) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (path) {
            case endpoints_1.cbrEndpoints.daily:
                return yield fetchWithHost({ path: endpoints_1.cbrEndpoints.daily }).then((res) => res.json());
        }
    });
}
exports.cbrResource = cbrResource;
//# sourceMappingURL=index.js.map