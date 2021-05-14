// pages/videoPlayer/index.js
let timer;
let v;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:0,
    minute:0,
    btnAbled:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    v = wx.createVideoContext('videoPlayer', this)
    console.log(options.url);
    this.setData({
      url:options.url,
      userInfo:app.userInfo
    })
  },

  play(e){
    const type = e.currentTarget.dataset.sporttype
    if(type === 'yoga'){
      timer = setInterval(()=>{
        if(this.data.second === 60){
          this.setData({
            second:0,
            minute:this.data.minute + 1,
            sportType:type
          })
        }
        this.setData({
          second: this.data.second + 1
        })
        console.log(this.data.minute,this.data.second);
      },1000)
    }
  },
  pause(){
    clearInterval(timer);
  },

  end(){
    clearInterval(timer)
    v.stop();
    this.setData({
      second:0,
      minute:0
    })
    wx.navigateTo({
      url: '../yoga/index',
    })
  },
  startExercise(){
    v.play();
    this.setData({
      btnAbled:false
    })
  },
  endExercise(){
    let that = this;
    // console.log(that.data.userInfo);
    wx.showModal({
      title: '提示',
      content: '确认要结束运动吗，不再坚持一下下？',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://localhost:3000/miniuser/addUserData',
            data:{
              userName:that.data.userInfo.nickName,
              exercise:{
                date:new Date(),
                sportType:that.data.sportType==='yoga' ? 1 : 3,
                sportTime:that.data.minute + '分' +that.data.second + '秒'
              }
            },
            method:'POST',
            success:(res)=>{
              console.log(res);
            }
          })
          that.end();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  
  },
 
  onUnload: function () {
    clearInterval(timer)
  },

})