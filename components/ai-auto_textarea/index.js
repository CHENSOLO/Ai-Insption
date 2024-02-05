// components/ai-note-style/index.js
const app = getApp()
Component({
  //通过组件的外部类实现父组件控制子的样式
  // externalClasses:["title_class"],
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    length: 0,
    value: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //计算textarea的文字长度 并获取该textarea的数据
    handleInput(event) {
      const text_length = event.detail.cursor
      const text_value = event.detail.value
      // console.log(event)
      //子组件触发自定义事件，并传递文本区域的内容给父组件
      this.triggerEvent('textareaChange', { text_value })
      this.setData({
        length: text_length,
        value: text_value,
      })
    },

  }
})