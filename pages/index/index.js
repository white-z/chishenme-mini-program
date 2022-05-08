var t = getApp();
import utils from '../../utils/util'
Page({
    data: {
        status: "随缘一个",
        selected: "不知道吃什么?",
        fadeList: [],
        fullList: [],
        randomSelected: null
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage']
        })
    },
    onShow: function() {
        this.setData({
            fullList: utils.getList(utils.getText(t.globalData.text))
        });
    },
    onHide: function() {
      const that = this
        this.randomEnd();
    },
    getSelected: function() {
        var t = this;
        if(t.data.begin) {
          // 正在随机
          t.randomEnd(function() {
              t.setData({
                  begin: !1,
                  status: "吃这个吧~",
                  fadeList: []
              });
          })
        } else {
          // 随机已停止时
          if(t.data.status === '吃这个吧~') {
            wx.showModal({
              title: '就吃这个吧~',
              cancelText: '重来重来',
              confirmText: '好的',
              content: t.data.selected,
              success (res) {
                if (res.cancel) {
                  t.randomBegin(function() {
                      t.setData({
                          begin: !0,
                          status: "停止"
                      });
                  });
                }
              }
            })
          } else {
            t.randomBegin(function() {
                t.setData({
                    begin: !0,
                    status: "停止"
                });
            });
          }
        }
    },
    randomBegin: function(t) {
        var a = this;
        if (a.data.fullList.length > 1) {
            if (!a.data.begin) {
                var e = a.data.fullList.length, n = null;
                a.data.randomSelected = setInterval(function() {
                    var t = Math.floor(Math.random() * e);
                    t = t === n ? t === e - 1 ? --t : ++t : t, n = t;
                    var i = a.data.fullList[t], o = Math.ceil(Math.random() * wx.getSystemInfoSync().windowHeight), d = Math.ceil(Math.random() * (wx.getSystemInfoSync().windowWidth - 50)), s = Math.ceil(27 * Math.random() + 16), l = a.data.fadeList;
                    l.push({
                        name: i,
                        style: "top: " + o + "px;left: " + d + "px;font-size:" + s + "rpx;color: rgba(0,0,0,." + Math.random() + ")"
                    }), a.setData({
                        fadeList: l,
                        selected: i
                    }), l.length > 1e3 && (a.data.fadeList = []);
                }, 50), "function" == typeof t && t();
            }
        } else wx.showToast({
            title: "再去添加几个吧~",
            icon: "none"
        });
    },
    randomEnd: function(t) {
      
        this.data.randomSelected && (clearInterval(this.data.randomSelected), "function" == typeof t && t());
    }
});