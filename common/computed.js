import storage from '../utils/storage'

function handleComputedPrice(index) {
  let price = 0
  const carList = storage.get('carList')
  carList.forEach(v => {
    price += v.num * v.price
  })
  return price
}

export default handleComputedPrice