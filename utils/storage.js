function set(key, val) {
  wx.setStorageSync(key, val)
}

function get(key) {
  return wx.getStorageSync(key)
}

export default {
  set,
  get
}