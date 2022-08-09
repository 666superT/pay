import {
  addCar
} from './car'
import http from '../utils/http'

function scanCode() {
  wx.scanCode({
    onlyFromCamera: true,
    success: ((result) => {
      // console.log(result);
      let code = result.result
      // console.log(code);
      getGoodsInfo(code)
    }),
    fail: (err => {
      console.log(err);
    })
  })
}


// 获取商品信息 
function getGoodsInfo(params) {
  http({
    url: '/api/getProduct',
    data: {
      qcode: params
    }
  }, 'api2').then(res => {
    // console.log(res);
    if (!res) return
    addCar(res.result)
      wx.navigateTo({
        url: '/pages/car/car',
      })
  }).catch(err => {
    console.log(err);
  })
}

export default scanCode