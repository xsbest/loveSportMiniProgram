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
 
  },

  getUserInfoTap(){
    wx.getUserProfile({
      lang: 'zh_CN',
      desc:'授权将用于登录同步个人信息',
      success:(res)=>{
        console.log(res.userInfo);
        app.userInfo = res.userInfo
        wx.switchTab({
          url: '../chooseSport/index',
        })
      },
      fail:(res)=>{console.log(res);}
    })
  },
  clickToJump(){
    wx.checkSession({
      success (res) {
        console.log(111);

        //session_key 未过期，并且在本生命周期一直有效
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        wx.login({
          timeout: 6000,
          success:(res)=>{
            wx.switchTab({
              url: '../chooseSport/index',
            })
          }
        }) //重新登录
      }
    })
   
  }
})