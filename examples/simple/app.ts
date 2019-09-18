import axios from '../../src/index'
// post
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  },
  headers:{
    // 'Content-Type':'application/json;charset=UTF-8'
  },
})

const arr = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  headers:{},
  data:arr
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)   // URLSearchParams定义了很多处理url的方法

axios({
  method: 'post',
  url: '/base/post',
  headers:{},
  data: searchParams
})
