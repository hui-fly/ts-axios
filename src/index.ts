import {AxiosRequestConfig} from './types/index'
import { transformRequest } from './helper/data'
import {buildURL} from './helper/url'
import { transformHeader } from './helper/header'
import {xhr} from './xhr'
function axios(config:AxiosRequestConfig) {
    let {url,params,data,headers} = config
    config.url = buildURL(url,params)
    config.data = transformRequest(data)    // 将data字符串化
    config.headers = transformHeader(headers,data)
    xhr(config)
}
export default axios