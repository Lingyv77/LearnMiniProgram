// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handleIncurrement(event) {
    console.log(event);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handletabClick(event) {
    console.log(event)
  },
  handleSelClick() {
    // this.selectComponent('class/id') 类似vue中$refs
    const my_sel = this.selectComponent('#my-sel');
    // my_sel.setData({
    //   counter: my_sel.data.counter + 300
    // })
    my_sel.addCounter(10) //回调且传递参数my-sel内的methods
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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