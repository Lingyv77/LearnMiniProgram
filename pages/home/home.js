// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleTap() {
    console.log('bindtap');
    console.log(arguments[0])
  },
  handleLongtap() {
    console.log('bindlongtap');
  },
  handleTouchstart() {
    console.log('bindtouchstart');
  },
  handleTouchmove() {
    console.log('bindtouchmove');
  },
  handleTouchend() {
    console.log('bindtouchend');
  },
  outerTap(event) {
    console.log(event);
  },
  innerTap(event) {
    console.log(event);
  },
  handleItemClick(event) {
    console.log(event);
  },
  handleCaptrueView1() {
    console.log('handleCaptrueView1');
  },
  handleCaptrueView2() {
    console.log('handleCaptrueView2');
  },
  handleCaptrueView3() {
    console.log('handleCaptrueView3');
  },
  handleBindView1() {
    console.log('handleBindView1');
  },
  handleBindView2() {
    console.log('handleBindView2');
  },
  handleBindView3() {
    console.log('handleBindView3');
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