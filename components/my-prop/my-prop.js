// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "title default",
      observer(newValue, oldValue) {
        console.log(newValue +"<-->"+ oldValue);
      }
    }
  },
  externalClasses: ['titleclass']
  // 接受外界传递的class样式
})
