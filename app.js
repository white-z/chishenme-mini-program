App({
    onLaunch: function() {
        if (0 !== wx.getStorageSync("fullList").length) this.globalData.fullList = wx.getStorageSync("fullList"); else {
            var l = "真功夫 红荔村 永和大王 肯德基 麦当劳 汉堡王 必胜客 喜家德 遇见小面 大弗兰 兰州拉面 沙县小吃 自助快餐 味千拉面 酸菜鱼 减脂餐 辣可可 农耕记 猪脚饭 椰子鸡 万利记 霸碗 老乡鸡";
            l = l.split(" ");
            for (var t = [], a = 0; a < l.length; a++) t.push({
                name: l[a]
            });
            wx.setStorageSync("fullList", t), this.globalData.fullList = t;
        }
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
        })

        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            }
          })
        })
    },
    globalData: {
        fullList: null
    }
});