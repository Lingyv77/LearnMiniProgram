//getApp()获取App产生的实例
const app = new getApp();

const name = app.globalData.name;
Page({ //注册一个页面
  /**
   * 页面的初始数据
   */
  getUserData(event) {
    console.log(event);
  },
  data: {
    name,
    age: app.globalData.age,
    count: 0,
    books: [
      {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
      },
      {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
      },
      {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
      },
      {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
      },
  ]
  },
  addCount() {
    // this.data.count++; 不会实时监听
    this.setData({
      count: this.data.count + 1
    })
  },
  reduceCount() {
    this.setData({
      count: this.data.count - 1
    })
  }
})