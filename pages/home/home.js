import requests from '../../service/network'

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*-----------使用封装的requset发送网络请求------------ */
    //Promise最大的好处就是防止出现回调地狱
    requests({
      url: 'http://152.136.185.210:7878/api/m5/recommend'
    }).then(res => {
      console.log(res);
    })

    
    /*------------使用原生方法发送网络请求---------------*/ 
    //发送网络请求
    //1.发送最简单的网络请求
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success(res) {
        console.log(res);
      }
    })
    //2.get请求,带似乎携带参数
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/home/data',
      data: { //data 同query
        page: 1,
        type: 'sell'
      },
      success(res) {
        console.log(res);
      }
    })
    //3.post请求,并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        name: 'Lingyv',
        age: '17'
      },
      success(res) { //成功回调
        console.log(res)
      },
      fail(err) { //失败回调
        console.log(err);
      },
      complete(res) { //不论成败都回调
        console.log(res); 
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})