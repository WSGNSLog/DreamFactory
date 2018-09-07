//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    newList:[
      { url: "baidu.com", title: "sdsadsadasdas", classification: "ss", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdassss", classification: "ss", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "12", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "333", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "44", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "44", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "32", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "123", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "456", time: "2016-10-17", imgURL: "../../image/wechatHL.png" },
      { url: "baidu.com", title: "sdsadsadasdas", classification: "454", time: "2016-10-17", imgURL: "../../image/wechatHL.png" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
