// components/w-tab-control/w-tab-control.js
Component({
  data: {
    currentIndex: 0
  },
  properties: {
    control: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleItemClick(event) {
      const index = event.currentTarget.dataset.index;
      //1.修该currentIndex
      this.setData({
        currentIndex: index
      })
      //2.通知页面内的点击事件
      this.triggerEvent('itemClick', {index, title: this.properties.control.index})
    }
  },
  /*------------引入外部样式----------------*/ 
  externalClasses: {

  },
  /*------------属性和数据监听--------------*/
  observers: { //类似vue中的watch
    counter(newValue) {
      console.log(newValue);
    }
  },

  /*------------组件中监听声明周期函数---------------*/
  //1.监听所在页面的声明周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面的显示出来时');
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时');
    },
    resize() {
      console.log('监听页面尺寸的改变');
    }
  },
  //2. 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建出来');
    },
    attached() {
      console.log('组件被添加到页面');
    },
    ready() {
      console.log('组件被渲染出来');
    },
    moved() {
      console.log('组件被移到另外一个节点');
    },
    detached() {
      console.log('组件被移除掉');
    }
  }
})
