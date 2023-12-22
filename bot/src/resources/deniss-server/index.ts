import {denissServerEndpoints} from "./endpoints";
import {getFetchWithHost} from "../../shared/helpers/fetch-wIth-host";

require('dotenv').config();
const HOST = process.env.DENISS_BOT_API_HOST || ''

const fetchWithHost = getFetchWithHost(HOST)

export async function denissBotResource ({path, params}:{path: string, params?: Record<string, any>}){
   switch (path){
       case denissServerEndpoints.users.all:
            return await fetchWithHost({path:denissServerEndpoints.users.all}).then((res)=>res.data)

       case denissServerEndpoints.users.one:
            return await fetchWithHost({path: denissServerEndpoints.users.one, data: params, method: 'post'}).then((res)=>res.data)
    }
}