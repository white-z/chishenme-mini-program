// pages/edit/edit.js
const app = getApp()
import utils from '../../utils/util'
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
    const text = utils.getText(app.globalData.text)
    const list = utils.getList(text)
    this.setData({
      text,
      list
    })
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
      selected: this.data.selected === index ? null : index
    })
  },
  onCancel() {
    this.setData({
      selected: null
    })
  },
  onDelete(e) {
    const index = e.currentTarget.dataset.index
    const newText = utils.getText(this.data.text.replace(this.data.list[index], ''))
    this.setData({
      text: newText,
      list: utils.getList(newText),
      selected: null
    })
    utils.storeText(newText)
  },
  onInput(e) {
    const text = utils.getText(e.detail.value)
    const list = utils.getList(text)
    this.setData({
      text,
      list
    })
    utils.storeText(text)
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