// components/ai-copywrite-style/index.js
//数据导入
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    style_data: null,
  },
  /**
   * 组件的初始数据
   */
  data: {
    key: '',
    value: '',
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击选中默认为0+
    Checked(event) {
      const index = event.target.dataset.index
      const item_data = event.target.dataset.item_data
      // console.log(index)
      //子组件触发自定义事件，并传递文本区域的内容给父组件
      this.triggerEvent('copyWdata', { data: item_data });
      this.setData({
        key: index,
      })
    },
  }
})





