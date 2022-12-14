import http from '../../utils/http'
import scanCode from '../../common/scanCode'
import storage from '../../utils/storage'
// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    carList: []
  },
  /**
   * 获取轮播图
   */
  getBannerList() {
    http({
      url: '/api/app/banner',
      header: {
        devicetype: 'H5'
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        bannerList: res.data
      })
    })
  },
  /**
   * 扫码
   */
  handleScanCode() {
    scanCode()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  getCarList() {
    this.setData({
      carList: storage.get('carList')
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