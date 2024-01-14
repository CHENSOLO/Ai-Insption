// components/ai-note-style/index.js
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
    textLength: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //计算textarea的文字长度
    handleInput(event) {
      const text = event.detail.value
      const length = text.length
      this.setData({
        textLength: length
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