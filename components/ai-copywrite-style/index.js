// components/ai-copywrite-style/index.js
//数据导入
import { style_data } from "../../data/data"
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    
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
    Checked(event) {
      const index = event.target.dataset.index
      const item_data = event.target.dataset.item_data
      app.item_data = item_data
      this.setData({
        key: index,
      })
    },
  }
})