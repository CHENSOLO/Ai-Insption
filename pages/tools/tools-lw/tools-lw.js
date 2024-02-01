// pages/tools/tools-td/tools-td.js
import { HotList } from "../../../data/ai_tools_data"
import { language_data, lwmd_data } from "../../../data/data"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: 0,
    HotList,
    note_title: "请输入内容",
    title: "语言",
    title2: "论文生成类型",
    copyWdata: String,
    disabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取到对应id的icon
    const imgsrc = (HotList[options.id].imgSrc);
    this.setData({
      icon_data: imgsrc,
      language_data,
      lwmd_data,
    })
  },
  //处理开始生成按钮的功能
  handleButtonClick(event) {
    //获取笔记要求的数据
    const noteCopy = this.selectComponent('#noteCopy')
    const noteData = (noteCopy.data.value);
    //获取文案风格的数据
    const copyStyleData = (this.data.copyWdata)
    console.log(noteData, copyStyleData)
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
    //获取文案风格的key值传递到子组件
    const copywrite = this.selectComponent('#copywrite')
    //每次点击试一试，文案风格都会选择默认选项
    copywrite.setData({
      key: 0,
    })
    //获取子组件传递的内容渲染到textarea组件上
    this.setData({
      note_value: event.detail.item_content,
      disabled: event.detail.item_content === '',
      copyWdata: '短篇',

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