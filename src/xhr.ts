import { AxiosRequestConfig,AxiosResponse,AxiosPromise } from './types'
import { resolve } from 'dns';
export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve)=>{
    const { data = null, url, method = 'get', headers,responseType } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    request.onreadystatechange = function handleLoad() {   // 当服务端处理完之后会执行
      if (request.readyState !== 4) {
        return
      }
      const responseHeader = request.getAllResponseHeaders()    
      const responseData = responseType&&responseType!=='text'?request.response:request.responseText
      const response:AxiosResponse = {
        data:responseData,
        status:request.status,
        statusText:request.statusText,
        headers:responseHeader,
        config,
        request
      }
      resolve(response)
    }
    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === 'content-type') { //当我们传入的 data 为空的时候，请求 header 配置 Content-Type 是没有意义的，于是我们把它删除。
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])              // 调用原生的 setRequestHeader 设置请求头
      }
    })
    request.send(data)
  })
}