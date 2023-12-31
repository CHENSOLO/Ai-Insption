// components/ai-up-style/index.js
const app = getApp()

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
    multiIndex: [0, 0,],
    multiArray: [['时尚','美妆','数码'], ['时尚1']]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取Array的value值[1:1]
    bindMultiPickerChange(event) {
      const value = event.detail.value
      this.setData({
        multiIndex: value
      })
      // console.log(value)
    },
    //获取column和value的值
    bindMultiPickerColumnChange(event) {
      // console.log(event)
      var data = {
        multiIndex: this.data.multiIndex,
        multiArray: this.data.multiArray
      }
      //获取Index索引判断选择 == data.multiIndex[0]
      data.multiIndex[event.detail.column] = event.detail.value
      // console.log("yyyy"+data.multiIndex[event.detail.column])
      switch (data.multiIndex[0]) {
        case 0:
          // console.log("xxx" + data.multiIndex[0])
          data.multiArray[1] = ['时尚1', '时尚2', '时尚3'];
          break;
        case 1:
          data.multiArray[1] = ['美妆1', '美妆2', '美妆3'];
          break;
        case 2:
          data.multiArray[1] = ['数码1', '数码2', '数码3'];
          break;
      }
      // console.log(data);
      // const array0 = data.multiArray[0]
      // const index0 = data.multiIndex[0]
      // const array1 = data.multiArray[1]
      // const index1 = data.multiIndex[1]
      //获取当前的值并打印保存出来
      const data_index = data.multiArray[0][data.multiIndex[0]];
      const data_value = data.multiArray[1][data.multiIndex[1]];
      app.data_index = (data_index)
      app.data_value = (data_value)
      // console.log(app.data_index)
      // console.log(app.data_value)
      this.setData(data);
    },
  }
})