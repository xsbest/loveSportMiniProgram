// pages/userCenter/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/PicmOgM5hib52njTAOGdGEa0jheIVoQPIq3eOGl66swQxz2hWEU37px1beWAupySib1A6gdUVDVK20b1d0SHsAQfQ/132",
      city: "",
      country: "比利时",
      gender: 1,
      language: "zh_CN",
      nickName: "好名字",
      province: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const BMI = Number(new Number(90/1.74/1.74).toFixed(1))
    let fat;
      if( BMI<=18.4) fat = "偏瘦"; 
      if(BMI>=18.5&&BMI<=23.9) fat = "正常"; 
      if( BMI>=24.0&&BMI<=27.9) fat = "过重"; 
      if (BMI>=28.0) fat = "肥胖"; 
    this.setData({
      userInfo: app.userInfo,
      BMI:BMI,
      fat:fat
    })

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