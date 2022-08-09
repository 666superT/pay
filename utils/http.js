import APICinfig from '../config/config'
const http = (option,name='api1') => {
  wx.showLoading({
    title: '加载中...',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: APICinfig.baseUrl[name] + option.url,
      method: option.method || 'get',
      data: option.data,
      header: option.header,
      success: (res => {
        resolve(res.data)
      }),
      fail: (err => {
        reject(err)
      }),
      complete: (() => {
        wx.hideLoading()
      })
    })
  })
}

export default http