Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    barHeight: 20, //  顶部状态栏高度
    navBarHeight: 66, // 顶部高度
    tabList: [{
      id: '1',
      src: '../../images/ai_my/rank.png',
      title: '菜单一'
    },
    {
      id: '2',
      src: '../../images/ai_my/tv.png',
      title: '菜单二'
    },
    {
      id: '3',
      src: '../../images/ai_my/rank.png',
      title: '菜单三'
    },
    {
      id: '4',
      src: '../../images/ai_my/tv.png',
      title: '菜单四'
    }
    ],
  },
  // 头像监听
  headClick() {
    wx.showToast({
      title: '点击了头像',
      icon: 'none'
    })
    wx.navigateTo({
      url: '需要跳转的链接路径',
    })
  },
  // 查看详情监听
  detailClick() {
    wx.showToast({
      title: '查看详情',
      icon: 'none'
    })
    wx.navigateTo({
      url: '需要跳转的链接路径',
    })
  },
  // 更多实例
  shareClick() {
    wx.showToast({
      title: '分享更多示例',
      icon: 'none'
    })
    wx.navigateTo({
      url: '需要跳转的链接路径',
    })
  },
  // 二级菜单监听
  tabClick(e) {
    var info = e.currentTarget.dataset.item;
    wx.showToast({
      title: info.title,
      icon: 'none'
    })
    switch (info.id) {
      case '1':
        wx.navigateTo({
          url: '菜单一需要跳转的链接路径',
        })
        break;
      case '2':
        wx.navigateTo({
          url: '菜单二需要跳转的链接路径',
        })
        break;
      case '3':
        wx.navigateTo({
          url: '菜单三需要跳转的链接路径',
        })
        break;
      default:
        wx.navigateTo({
          url: '菜单四需要跳转的链接路径',
        })
        break;
    }
  },
  // 基本信息
  basicClick() {
    wx.showToast({
      title: '基本信息监听',
      icon: 'none'
    })
    wx.navigateTo({
      url: '需要跳转的链接路径',
    })
  },
  // 匿名反馈
  feedbackClick() {
    wx.showToast({
      title: '匿名反馈监听',
      icon: 'none'
    })
    wx.navigateTo({
      url: '需要跳转的链接路径',
    })
  },
  // 关于我们
  aboutClick() {
    wx.showToast({
      title: '关于我们监听',
      icon: 'none'
    })
    wx.navigateTo({
      url: '需要跳转的链接路径',
    })
  },
  // 页面滚动监听
  onPageScroll(e) {
    if (e.scrollTop > 60) {
      this.setData({
        show: true
      })
    } else {
      this.setData({
        show: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    var that = this;
    // 胶囊信息
    var menu = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success(res) {
        that.setData({
          barHeight: res.statusBarHeight,
          navBarHeight: menu.top + menu.height
        })
      }
    })
  },
})
