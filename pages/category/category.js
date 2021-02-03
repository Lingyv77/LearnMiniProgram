// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听 页面加载
   */
  onLoad: function () {
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll(position) {
    // console.log(position);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('下拉至底部');
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    console.log('下拉刷新');
  }
})