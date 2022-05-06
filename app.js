App({
    onLaunch: function() {
        if (0 !== wx.getStorageSync("fullList").length) this.globalData.fullList = wx.getStorageSync("fullList"); else {
            var l = "馄饨 拉面 烩面 热干面 刀削面 油泼面 炸酱面 炒面 重庆小面 米线 酸辣粉 土豆粉 螺狮粉 凉皮儿 麻辣烫 肉夹馍 羊肉汤 炒饭 盖浇饭 卤肉饭 烤肉饭 黄焖鸡米饭 驴肉火烧 川菜 麻辣香锅 火锅 酸菜鱼 烤串 披萨 烤鸭 汉堡 炸鸡 寿司 蟹黄包 煎饼果子 生煎 炒年糕";
            l = l.split(" ");
            for (var t = [], a = 0; a < l.length; a++) t.push({
                name: l[a]
            });
            wx.setStorageSync("fullList", t), this.globalData.fullList = t;
        }
    },
    globalData: {
        fullList: null
    }
});