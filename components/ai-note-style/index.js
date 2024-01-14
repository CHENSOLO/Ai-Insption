// components/ai-note-style/index.js
const app = getApp()
Component({
  

  //通过组件的外部类实现父组件控制子的样式
  externalClasses:["title_class"],
  /**
   * 组件的属性列表
   */
  properties: {
    note_title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    length: 0,
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //计算textarea的文字长度 并获取该textarea的数据
    handleInput(event) {
      const text_length = event.detail.cursor
      const text_value = event.detail.value
      this.setData({
        length: text_length,
        value: text_value
      })
    },
    
    // 获取textarea的数据
    // bindFormSubmit(event) {
    //   // console.log(event)
    //   const value = event.detail.value.textarea
    //   console.log(value)
    // },
  }
})