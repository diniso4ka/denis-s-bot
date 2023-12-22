import axios, {AxiosRequestConfig} from "axios";

export function getFetchWithHost(HOST: string){
        return async function<T> ({path, params, method='get' ,data}:{path: string, data?: T, params?: AxiosRequestConfig, method?: string
}){
            return axios[method](`${HOST}${path}`, data, params)
        }
}