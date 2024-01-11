// components/ai-copywrite-style/index.js
const app = getApp()
//数据导入
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    style_data: Array 
  },

  /**
   * 组件的初始数据
   */
  data: {
    key: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击选中默认为0+
    Checked(event) {
      const index = event.target.dataset.index
      const item_data = event.target.dataset.item_data
      app.item_data = item_data
      // console.log(app.item_data)
      this.setData({
        key: index,
      })
    },
  }
})