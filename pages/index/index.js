var t = getApp();

Page({
    data: {
        status: "随缘一个",
        selected: "不知道吃什么?",
        fadeList: []
    },
    onLoad: function() {},
    onShow: function() {
        this.setData({
            fullList: t.globalData.fullList
        });
    },
    onHide: function() {
        this.randomEnd(function() {
            that.setData({
                begin: !1,
                status: "不行，换一个",
                fadeList: []
            });
        });
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
        if (a.data.fullList.length) {
            if (!a.data.begin) {
                var e = a.data.fullList.length, n = null;
                a.data.randomSelected = setInterval(function() {
                    var t = Math.floor(Math.random() * e);
                    t = t === n ? t === e - 1 ? --t : ++t : t, n = t;
                    var i = a.data.fullList[t].name, o = Math.ceil(Math.random() * wx.getSystemInfoSync().windowHeight), d = Math.ceil(Math.random() * (wx.getSystemInfoSync().windowWidth - 50)), s = Math.ceil(27 * Math.random() + 16), l = a.data.fadeList;
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