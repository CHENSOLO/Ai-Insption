// pages/welcome/welcome.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'


Page({

  /**
   * 页面的初始数据
   */
  data: {

    // avatarUrl: defaultAvatarUrl,
    userInfo: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //处理头像用户名称信息
  getUserProfile(event) {
    console.log(event)
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
        console.log(res.userInfo.avatarUrl,res.userInfo.nickName)
      }
    })
  },

  //提交修改到服务器
  submitChanges() {
    // console.log(this.data.avatarUrl, this.data.nickname)
    wx.request({
      url: '服务端接口url',
      method: 'POST',
      data: {
        avatarUrl: this.data.avatarUrl,
        nickname: this.data.nickname,
      },
      success(res) {
        //处理服务器返回的结果
      },
      fail(res) {

      }
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