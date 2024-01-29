// pages/tools-xhs/tools-xhs.js
//数据导入
import { style_data } from "../../../data/data"
import { change_data } from "../../../data/data_change"
import { HotList } from "../../../data/ai_tools_data"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: 0,
    title: "选择文案的风格",
    note_title: "笔记要求",
    change_title: "试一试",
    note_data: null,
    copyWdata: String,
    disabled: true,
    note_value: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const img_data = (HotList[0].imgSrc)
    this.setData({
      style_data,
      change_data,
      img_data
    })

  },
  //处理开始生成按钮的功能
  handleButtonClick(event) {
    const noteCopy = this.selectComponent('#noteCopy')
    const upStyle = this.selectComponent('#upStyle')
    //获取博主类型的数据
    const upStyleData1 = (upStyle.data.multiArray[0][upStyle.data.multiIndex[0]])
    const upStyleData2 = (upStyle.data.multiArray[1][upStyle.data.multiIndex[1]])
    //获取文案风格的数据
    const copyStyleData = (this.data.copyWdata)
    //获取笔记要求的数据
    const noteData = (noteCopy.data.value);
    console.log(upStyleData1, upStyleData2, copyStyleData, noteData)
  },

  //点击获取文案风格的数据并存入data
  copyWrite(event) {
    const copyWdata = (event.detail.data);
    // console.log(copyWdata)
    this.setData({
      copyWdata: copyWdata
    })
  },
  //处理子组件的textare是否有数据更改button使用
  handleTextareaNote(event) {
    // console.log(event)
    this.setData({
      disabled: event.detail.text_value === ''
    });
  },
  //获取笔记要求子组件传递的content内容渲染到页面
  updataNote(event) {
    // console.log(event)
    //获取文案风格的key值传递到子组件
    const copywrite = this.selectComponent('#copywrite')
    //获取博主类型的key值传递到子组件
    const upStyle = this.selectComponent('#upStyle')
    //获取试一试每个字段的index用于判断选择的博主类型并渲染
    const index = event.detail.index
    const value_map = {
      0: [1, 1],
      1: [4, 4],
      2: [8, 8],
      3: [0, 0],
      4: [4, 4],
      5: [4, 7],
    }
    upStyle.setData({
      multiIndex: value_map[index]
    });
    // switch (index) {
    //   case 0:
    //     upStyle.setData({
    //       multiIndex: [1, 1]
    //     });
    //     break;

    //每次点击试一试，文案风格都会选择默认选项
    copywrite.setData({
      key: 0,
    })
    //获取子组件传递的内容渲染到textarea组件上
    this.setData({
      note_value: event.detail.item_content,
      disabled: event.detail.item_content === '',
      copyWdata: '默认',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})