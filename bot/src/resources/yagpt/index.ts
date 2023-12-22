import {yagptEndpoints} from "./endpoints";
import {getFetchWithHost} from "../../shared/helpers/fetch-wIth-host";

require('dotenv').config();
const HOST = process.env.YAGPT_API_HOST || ''
const TOKEN = process.env.OAUTH_TOKEN || ''
const YC_FOLDER_ID = process.env.YC_FOLDER_ID || ''

const fetchWithHost = getFetchWithHost(HOST)

export async function yagptResource ({path, params}:{path: string, params?: Record<string, any>}){
   switch (path){
       case yagptEndpoints.v1.completion:
            return await fetchWithHost({path:yagptEndpoints.v1.completion, method: 'post',
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
                }, params: { headers: {Authorization: `Bearer ${TOKEN}`}
       }}).then((res)=>res.data)
    }
}