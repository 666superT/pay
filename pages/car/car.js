// pages/car/car.js
import storage from '../../utils/storage'
import handleComputedPrice from '../../common/computed'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    price: 0
  },
  /**
   * 加减数量
   * @param {*} options 
   */
  handleSubNum(e) {
    // console.log(e);
    const _index = e.target.dataset.index
    this.handleComputedNum(_index, 'sub')
  },
  handleAddNum(e) {
    const _index = e.target.dataset.index
    this.handleComputedNum(_index, 'add')
  },
  /**
   * 加减运算抽离
   */
  handleComputedNum(index, method) {
    method === 'add' ? this.data.goodsList[index].num++ : this.data.goodsList[index].num--
    this.setData({
      goodsList: this.data.goodsList,
    })
    storage.set('carList',this.data.goodsList)
    this.setData({
      price:handleComputedPrice()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  /**
   * 获取购物车数据
   */
  getCarList() {
    this.setData({
      goodsList: storage.get('carList') || [],
      price:handleComputedPrice()
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getCarList()
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})