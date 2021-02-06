const TOKEN = 'token';
// app.js
App({
  globalData: {
    token: null
  },
  onLaunch() {
    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN);
    
    //2.判断token是否有值
    if(token && token.length !== 0) { //token已经有值, 验证token是否过期
      this.toeck_token(token)  //验证token是否过期
    }else { //没有值进行登录操作
      this.login();
    }
  },
  toeck_token(token) {
    console.log('有缓存记录');
    wx.request({
      url: 'http://httpbin.org',
      hander: {
        token
      },
      success: (res) => {
        if(res.data.errCode) { //有效则存档 globalData.token
          this.globalData.token = token;
        }else { //无效则重新登录
          this.login();
        }
      }
    })
  },
  // 登录操作
  login() {
    console.log('请登录');
    wx.login({
      //code只有5分钟的有效期
      success: (res) => {
        //1.获取code
        const code = res.code;
        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://httpbin.org/post',
          method: 'POST',
          data: {
            code: code
          },
          success: (res) => {
            res = {data: {token: 'st$90_dfjbFtty'}} //假设有数据
            //1.取出koten
            const token = res.data.token;
            //2.将token保存在globalData中
            this.globalData.token = token;
            //3.尽心本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
