// pages/edit/edit.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    text: '',
    selected: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const text = app.globalData.text || ''
    const list = text.replace(/\s{2,}/g, ' ').split(' ').filter(el => el)
    this.setData({
      text,
      list
    })
    console.log(this.data.text)
    console.log(this.data.list)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onSelect(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      selected: index
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})