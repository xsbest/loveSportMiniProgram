// pages/register/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.userInfo);
  },
  formSubmit(e){
    console.log(e.detail.value);
   const res = wx.request({
      url:'http://localhost:3000/miniuser/insertUserData',
      data:{
        userName:'123123',
        weight:e.detail.value.weight,
        height:e.detail.value.height,
        exercisesHistory:[]
      },
      method:'POST'
    })
    console.log(res);
  }
})