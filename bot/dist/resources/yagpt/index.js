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
exports.yagptResource = void 0;
const endpoints_1 = require("./endpoints");
const fetch_wIth_host_1 = require("../../shared/helpers/fetch-wIth-host");
require('dotenv').config();
const HOST = process.env.YAGPT_API_HOST || '';
const TOKEN = process.env.OAUTH_TOKEN || '';
const YC_FOLDER_ID = process.env.YC_FOLDER_ID || '';
const fetchWithHost = (0, fetch_wIth_host_1.getFetchWithHost)(HOST);
function yagptResource({ path, params }) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (path) {
            case endpoints_1.yagptEndpoints.v1.completion:
                return yield fetchWithHost({ path: endpoints_1.yagptEndpoints.v1.completion, method: 'post',
                    data: {
                        modelUri: `gpt://${YC_FOLDER_ID}/yandexgpt-lite`,
                        completionOptions: {
                            stream: false,
                            temperature: 0.6,
                            maxTokens: "2000"
                        },
                        messages: [
                            {
                                role: "user",
                                text: params.text
                            }
                        ]
                    }, params: { headers: { Authorization: `Bearer ${TOKEN}` }
                    } }).then((res) => res.data);
        }
    });
}
exports.yagptResource = yagptResource;
//# sourceMappingURL=index.js.map