import storage from '../utils/storage'

function handleComputedPrice() {
  let price = 0
  const carList = storage.get('carList')
  carList.forEach(v => {
    price += ((v.num*10) * (v.price*10))/100
  })
  return price
}

export default handleComputedPrice