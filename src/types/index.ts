import { head, config } from "shelljs";
import { request } from "https";

export type Method = 'get' | 'GET'  //字符串字面量类型允许你指定字符串必须的固定值,Method类型的变量只能是其中几个固定值
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
export interface AxiosRequestConfig {
    url: string
    method?:Method
    data?:any
    params?:any
    headers?:any
    responseType?:XMLHttpRequestResponseType //是一个枚举字符串，用于指定包含在一个 XMLHttpRequest 中的 response 的数据类型
}
export interface AxiosResponse {
  data:any
  status:number
  statusText:string
  headers:any
  config:AxiosRequestConfig
  request:any
}
export interface AxiosPromise extends Promise<AxiosResponse> {
}

