// pages/tools/tools-zh/tools-zh.js
import { HotList } from "../../../data/ai_tools_data"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    HotList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取到对应id的icon
    const imgsrc = (HotList[options.id].imgSrc);
    // console.log(HotList[0])
    this.setData({
      icon_data: imgsrc
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