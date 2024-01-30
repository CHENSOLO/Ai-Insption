// pages/Ai-tools/Ai-tools.js
//数据导入
import { HotList } from "../../data/ai_tools_data"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    segmentData: 0,
    // segmentData: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      HotList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  // 获取选项栏的数据
  GetTabinfo(event) {
    const key = event.detail.activeKey
    this.setData({
      segmentData: key
    })
  },


  //跳转到xhs详情页面
  ongodetail_xhs(event) {
    // 获取跳转的id
    const id = event.target.dataset.id
    //获取跳转的名称
    const name = event.target.dataset.name
    // 根据获取id跳转到不同的页面
    wx.navigateTo({
      url: '../tools/' + name + '/' + name + '?id=' + id
    })
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