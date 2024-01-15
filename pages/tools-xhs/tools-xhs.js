// pages/tools-xhs/tools-xhs.js
//数据导入
import { style_data } from "../../data/data"
import { change_data } from "../../data/data_change"
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      style_data,
      change_data
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
  },

  //获取文案风格的数据并存入data
  copyWrite(event) {
    const copyWdata = (event.detail.data);
    this.setData({
      copyWdata: copyWdata
    })
  },
  //处理子组件的textare是否有数据更改button使用
  handleTextareaChange(event) {
    this.setData({
      disabled: event.detail.text_value === ''
    });
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