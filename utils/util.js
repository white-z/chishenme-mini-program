const app = getApp()
export default {
    storeText(t) {
      app.globalData.text = t
        wx.setStorageSync(app.globalData.storageKey, t)
    },
    getText(value) {
      if(typeof value === 'string' && value.length) {
        return value.replace(/\s{2,}/g, ' ').replace(/[\r\n]/g, ' ')
      } else {
        return ''
      }
    },
    getList(value) {
      if(typeof value === 'string' && value.length) {
        return value.split(' ').filter(el => el)
      } else {
        return []
      }
    }
};