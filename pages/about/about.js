// pages/about/about.js
Page({
  data: {
  },
  handleShowToast() {
    wx.showToast({
      title: '支付成功',
      duration: 1000,
      icon: 'success' , //弹窗类型
      success() {
        console.log('展示弹窗回调');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '是否确定支付',
      content: '检测异常操作',
      // showCancel: false, //是否显示取消按钮
      cancelColor: '#000000',
      success(res) {
        if(res.cancel) {
          console.log("用户选择了取消操作");
        }else if(res.confirm) {
          console.log("用户选择了确定操作")
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '正在加载中',
      mark: true
    })
    setTimeout(() => {
      wx.hideLoading(); //调用这个 wx.hideLoading()函数  Loading 才会消失
    }, 3000)
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'green',
      success(res) {
        console.log(res)
      }
    })
  },
  onShareAppMessage(options) { //分享
    return {
      title: '新年好',
      imageUrl: 'http://img.netbian.com/file/2020/0809/1200106635d0f186f62877257fb3607a.jpg', //默认当前面截图
      path: '/pages/about/about',
    }
  }
})