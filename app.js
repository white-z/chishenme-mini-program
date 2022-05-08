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
            wx.removeStorageSync('fullList')
        } else {
          
            const text = wx.getStorageSync(STORAGE_KEY)
            if(!text.length) {
                const defauleText = '真功夫 红荔村 永和大王 肯德基 麦当劳 汉堡王 必胜客 喜家德 遇见小面 大弗兰 兰州拉面 沙县小吃 自助快餐 味千拉面 酸菜鱼 减脂餐 辣可可 农耕记 猪脚饭 椰子鸡 万利记 霸碗 老乡鸡'
                wx.setStorageSync(STORAGE_KEY, defauleText)
                this.globalData.text = wx.getStorageSync(STORAGE_KEY)
            } else {
              this.globalData.text = text
            }
            
        }
        
    },
    globalData: {
        storageKey: 'text',
        fullList: null,
        text: ''
    }
});