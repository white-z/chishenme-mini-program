App({
    onLaunch: function() {
        const STORAGE_KEY = this.globalData.storageKey
        const fullList = wx.getStorageSync('fullList')
        if(fullList.length) {
            // 旧数据
            let text = ''
            fullList.forEach(el => {
                text += el.name.trim() + ' '
            })
            wx.setStorageSync(STORAGE_KEY, text)
            this.globalData.text = wx.getStorageSync(STORAGE_KEY)
        } else {
            const text = wx.getStorageSync(STORAGE_KEY)
            if(!text.length) {
                const defauleText = '馄饨 拉面 烩面 热干面 刀削面 油泼面 炸酱面 炒面 重庆小面 米线 酸辣粉 土豆粉 螺狮粉 凉皮儿 麻辣烫 肉夹馍 羊肉汤 炒饭 盖浇饭 卤肉饭 烤肉饭 黄焖鸡米饭 驴肉火烧 川菜 麻辣香锅 火锅 酸菜鱼 烤串 披萨 烤鸭 汉堡 炸鸡 寿司 蟹黄包 煎饼果子 生煎 炒年糕'
                wx.setStorageSync(STORAGE_KEY, defauleText)
            }
            this.globalData.text = text
        }
    },
    globalData: {
        storageKey: 'text',
        fullList: null,
        text: ''
    }
});