const api = require("/utils/api")
//app.js
App({
  onLaunch: function() {
    // չʾ���ش洢����
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // ��¼
    wx.login({
      success: res => { // ���� res.code ����̨��ȡ openId, sessionKey, unionId
        console.log(res)
        var wxLogin = api.wxLogin({
            code: res.code
          }).then(function(data){
            console.log(data)
            // wx.setStorageSync('token', data.data)
          })
       
      }
    })


    // ��ȡ�û���Ϣ
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // �Ѿ���Ȩ������ֱ�ӵ��� getUserInfo ��ȡͷ���ǳƣ����ᵯ��
          wx.getUserInfo({
            success: res => {
              // ���Խ� res ���͸���̨����� unionId
              this.globalData.userInfo = res.userInfo

              // ���� getUserInfo ���������󣬿��ܻ��� Page.onLoad ֮��ŷ���
              // ���Դ˴����� callback �Է�ֹ�������
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // ��ȡϵͳ״̬����Ϣ
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null
  }
})