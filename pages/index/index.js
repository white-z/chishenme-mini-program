//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    status: '随缘一个',
    random: '不知道吃什么?',
    foodList: ['炒面', '馄饨', '拉面', '烩面', '炒年糕', '炸酱面', '炒面', '重庆小面', '米线', '酸辣粉', '土豆粉', '螺狮粉', '凉皮儿', '麻辣烫', '肉夹馍', '羊肉汤', '炒饭', '盖浇饭', '卤肉饭', '烤肉饭', '黄焖鸡米饭', '驴肉火烧', '川菜', '麻辣香锅', '火锅', '酸菜鱼', '烤串', '披萨', '烤鸭', '汉堡', '炸鸡', '寿司', '蟹黄包', '煎饼果子', '生煎', '炒年糕']
  },
  onLoad: function() {

  },
  getFood: function(){
    const that = this 
    if(!that.data.begin) {
      that.randomBegin()
    }else {
      that.randomEnd()
    }
  },
  randomBegin: function () {
    if (this.data.begin) {
      return
    }
    const length = this.data.foodList.length - 1 
    this.setData({
      begin: true,
      status: '停止',
      randomFood: setInterval(() => {
        this.setData({
          random: this.data.foodList[Math.ceil(Math.random() * length)],
        })
      }, 80)
    })
  },
  randomEnd: function () {
    if (this.data.randomFood) {
      clearInterval(this.data.randomFood)
      this.setData({
        begin: false,
        status: '不行，换一个'
      })
    }
  }
})
