// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event) {
    console.log('用户正在输入内容',event);
  },
  handleFocus(event) {
    console.log('用户以获取焦点',event);
  },
  handleBlur(event) {
    console.log('用户失去焦点',event);
  },
})