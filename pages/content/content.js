// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    imgURLs: [
      '../../Image/1.jpg',
      '../../Image/2.jpg',
      '../../Image/3.jpg',
      '../../Image/4.jpg',
      '../../Image/5.jpg',
    ],
    icoURLs: [],
    fourBCt: [
      {
        text: '政务公开',
        img: ''
      },
      {
        text: '公款透明',
        img: ''
      },
      {
        text: '开放建设',
        img: ''
      },
      {
        text: '发展方向',
        img: ''
      }
    ]
  },
  gotoLitlepage(e){
    console.log(e.currentTarget.dataset['index'])
    let idex = e.currentTarget.dataset['index']
    switch (idex){
      case 0:
        wx.navigateTo({
          url: './zwgk/zwgk'
        });
        break;
      case 1:
        wx.navigateTo({
          url: './gktm/gktm'
        });
        break;
      case 2:
        wx.navigateTo({
          url: './kfjs/kfjs'
        });
        break;
      case 3:
        wx.navigateTo({
          url: './fzfx/fzfx'
        });
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.fourBCt)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})