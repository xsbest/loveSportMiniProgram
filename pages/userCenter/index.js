// pages/userCenter/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.userInfo,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/miniuser/getUserData',
      data:{
        userName:app.userInfo.nickName
      },
      success:(res)=>{
        const BMI = Number(new Number(res.data.list.weight/res.data.list.height/res.data.list.height*10000).toFixed(1))
        let fat;
          if( BMI<=18.4) fat = "偏瘦"; 
          if(BMI>=18.5&&BMI<=23.9) fat = "正常"; 
          if( BMI>=24.0&&BMI<=27.9) fat = "过重"; 
          if (BMI>=28.0) fat = "肥胖"; 
        that.setData({
          weight:res.data.list.weight,
          height:res.data.list.height,
          age:res.data.list.age,
          BMI:BMI,
          fat:fat
        })
      },
      method:'POST'
    })
    this.setData({
      userInfo: app.userInfo,
    })

  },


  editData(){
    wx.navigateTo({
      url: '../editPage/index',
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
    let that = this;
    wx.request({
      url: 'http://localhost:3000/miniuser/getUserData',
      data:{
        userName:app.userInfo.nickName
      },
      success:(res)=>{
        const BMI = Number(new Number(res.data.list.weight/res.data.list.height/res.data.list.height*10000).toFixed(1))
        let fat;
          if( BMI<=18.4) fat = "偏瘦"; 
          if(BMI>=18.5&&BMI<=23.9) fat = "正常"; 
          if( BMI>=24.0&&BMI<=27.9) fat = "过重"; 
          if (BMI>=28.0) fat = "肥胖"; 
        that.setData({
          weight:res.data.list.weight,
          height:res.data.list.height,
          age:res.data.list.age,
          BMI:BMI,
          fat:fat
        })
      },
      method:'POST'
    })
    this.setData({
      userInfo: app.userInfo,
    })
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