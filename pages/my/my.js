//index.js
//获取应用实例
const app = getApp()
const http = require("../../utils/api")

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: '版本 0.0.1',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '录像'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '皮肤'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '发现'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    gridCol: 4,
    skin: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  //获取用户信息并传递到后台
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo

    wx.login({
      success(res) {
        if (res.code) {

          // var pagram = {
          //   encryptedData: e.detail.encryptedData,
          //   iv: e.detail.iv,
          //   signature: e.detail.signature,
          //   code: res.code
          // }
          // wx.request({
          //   url: 'http://localhost:8080/wxUserInfo', // 仅为示例，并非真实的接口地址
          //   data: pagram,
          //   header: {
          //     "Content-Type": "application/x-www-form-urlencoded"//设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
          //   },
          //   method: 'POST',//默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
          //   success(res) {
          //     console.log(res.data)
          //     var data = res.data;
          //     console.log("返回值")
          //     console.log(data)
          //     console.log(data.openId)
          //     console.log(data["openId"])
          //     console.log("返回值类型:" + typeof(data));
          //     // var ss = JSON.parse(data)
          //     // console.log("a:" + typeof (ss));
          //     // console.log(ss.openId)
          //     // console.log(ss["openId"])
          //     // console.log(ss.openid)
          //     // console.log(ss["openid"])
          //   }
          // })




          // //获取加密用户信息
          http.WxUserInfo({
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
            signature: e.detail.signature,
            code:res.code
          }).then(function(data){
            console.log("返回值")
            console.log(data)
            console.log("返回值类型:" + typeof (data));
            console.log(data.openId)
            console.log(data["openId"])
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })


    // http.getUserPhone({}).then(data => {
    //   if (data) {
    //     //返回结果的处理逻辑
    //   }
    // })  

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})