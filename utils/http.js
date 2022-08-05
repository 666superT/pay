import APICinfig from '../config/config'
const http=(option)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:APICinfig.baseUrl+option.url ,
      method:option.method,
      data:option.data,
      header:option.header,
      success:(res=>{
        resolve(res)
      }),
      fail:(err=>{
        reject(err)
      })
    })
  })
}

export default http