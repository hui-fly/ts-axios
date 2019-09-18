import {isPlainObject} from './util'
function normalizeHeaderName(headers:any,normalizeName:string) {    //  将header的某个属性规范化
    if (!headers) {
        return
    }
    Object.keys(headers).forEach((name)=>{
        if (name!==normalizeName&&name.toUpperCase()===normalizeName.toUpperCase()) {
            headers[normalizeName] = headers[name]
            delete headers[name]
        }
    })
}
export function transformHeader(headers:any,data:any) {
    normalizeHeaderName(headers,'Content-Type')     // 对header的某些属性规范化
    if(isPlainObject(data)) {
        if(headers&&!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}