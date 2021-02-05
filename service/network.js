export default function(option) {
  return new Promise((reslove,reject) => {
    wx.request({
      url: option.url,
      method: option.method || 'GET',
      data: option.data || {},
      success: reslove,
      fail: reject
    })
  })
}