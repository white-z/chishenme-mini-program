module.exports = {
    saveList: function(t, s) {
        wx.setStorageSync("fullList", t), getApp().globalData.fullList = t, s && s.setData({
            fullList: t
        });
    }
};