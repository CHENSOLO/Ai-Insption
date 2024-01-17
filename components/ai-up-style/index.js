// components/ai-up-style/index.js
const app = getApp()

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    up_name_data: null,
    up_content_data:null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    multiIndex: [0, 0,],
    multiArray: [['时尚', '美妆', '数码', '健身', '旅行与探险', '教育与学习', '家居与装饰', '母婴育儿', '食品与烹饪', '财经与投资'], ['搭配博主']]
    
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
          data.multiArray[1] = ['时尚博主', '品牌主理人', '街拍博主', '搭配博主', '二手时尚', '体型穿搭博主'];
          break;
        case 1:
          data.multiArray[1] = ['美妆博主', '护肤博主', '彩妆达人', '形象设计'];
          break;
        case 2:
          data.multiArray[1] = ['DIY技术博主', '游戏博主', '科技新闻博主', '摄影博主', '数码生活博主'];
          break;
        case 3:
          data.multiArray[1] = ['健身教练博主', '健身达人博主', '健身知识博主', '健身食谱博主', '健身装备博主'];
          break;
        case 4:
          data.multiArray[1] = ['旅行攻略博主', '户外探险博主', '美食旅行博主', '冒险探险博主', '家庭旅行博主'];
          break;
        case 5:
          data.multiArray[1] = ['学习方法博主', '考试备考博主', '语言学习博主'];
          break;
        case 6:
          data.multiArray[1] = ['家居设计博主', '家居DIY博主', '家居收纳整理博主', '家居摄影博主'];
          break;
        case 7:
          data.multiArray[1] = ['孕期指导博主', '育婴知识博主', '辅食营养博主', '儿童教育博主'];
          break;
        case 8:
          data.multiArray[1] = ['美食博主', '健康饮食博主', '烘焙博主', '食品评论博主', '美食摄影博主'];
          break;
        case 9:
          data.multiArray[1] = ['财经新闻博主', '投资理财博主', '创业投资博主', '个人理财博主'];
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