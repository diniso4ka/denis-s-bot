import {cbrEndpoints} from "./endpoints";
import {getFetchWithHost} from "../../shared/helpers/fetch-wIth-host";

require('dotenv').config();
const HOST = process.env.CBR_API_HOST|| ''

const fetchWithHost = getFetchWithHost(HOST)

export async function cbrResource ({path, params}:{path: string, params?: Record<string, any>}){
    switch (path){
        case cbrEndpoints.daily:
           return await fetchWithHost({path: cbrEndpoints.daily}).then((res)=>res.json())
    }
}