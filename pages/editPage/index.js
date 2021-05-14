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
    // console.log(app.userInfo);
  },
  formSubmit(e){
    console.log(e.detail.value);
    const val = e.detail.value
    if(val.age==='' || val.weight === ''|| val.height === ''){
      wx.showToast({
        title: '填全了再提交啊你',
        icon: 'none',
      })
    }
    else{
      wx.request({
        url:'http://localhost:3000/miniuser/editUserData',
        data:{
          userName:app.userInfo.nickName,
          weight:e.detail.value.weight,
          height:e.detail.value.height,
          age:e.detail.value.age,
          exercisesHistory:[]
        },
        method:'POST',
        success:(res)=>{
          if(res.data.code === 200){
            wx.switchTab({
              url: '../userCenter/index',
            })
            wx.showToast({
              title: '修改成了！',
              icon:'none'
            })
          }
          else{
            wx.showToast({
              title: '你好像填过了小伙汁',
              icon:'none'
            })
          }
        }
      })
    }

  }
})