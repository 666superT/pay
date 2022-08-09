import storage from '../utils/storage'
// 扫码给本地添加购物车数据
let carList = storage.get('carList') || []
function addCar(params) {
  let flag = false
  carList.forEach(v => {
    if (v._id === params[0]._id) {
      v.num++
      flag = true
    }
  })
  if (!flag) {
    params[0].num = 1
    carList.push(params[0])
  }
  storage.set("carList", carList)
  // console.log(carList);
}

export {
  addCar
}