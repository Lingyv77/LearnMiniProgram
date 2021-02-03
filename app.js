// app.js
App({ 
  /**
   * 生命周期函数: 会在后台存活一段时间
   * 小程序初始化完成时, 会执行的生命周期函数
   */

  onLaunch: function () { //小程序初始化完成时, 执行的生命周期函数
    console.log('小程序初始化已结束: onLaunch');
    wx.getUserInfo({ //第一种, 获取用户信息
      success: function (res) {
        console.log(res.userInfo);
      }
    })
  },
  onShow: function (options) { //小程序界面显示出来后会执行的生命周期函数
    console.log('界面已显示: onShow');
    //1.判断小程序进入场景
    console.log(options);
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    setTimeout(() => {
      // throw new Error('test error'); //测试onError 函数生命周期函数
    }, 3000)
  },
  onHide: function (options) {
    console.log('页面已被隐藏: onHide');
  },
  onError: function (msg) {
    console.log('程序出现错误: onError')
  },
  globalData: {
    name: "Lingyv77",
    age: '17'
  }
  
})
