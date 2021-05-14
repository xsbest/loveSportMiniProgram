const app = getApp();

Page({
  data: {
    imgUrlList:{
      hiit:'../../images/hiitSenior.png',
      running:'../../images/running.png',
      skipping:'../../images/skipping.png',
      yoga:'../../images/yoga.png'
    },
    exerciseList:[
    //   {
    //     date:'2021年4月29日15:46:11',
    //     sportType:'Hiit',
    //     sportTime:'10秒',
    //     cal:'0.01',
    //     imgUrl:'../../images/hiitSenior.png',
    //   },
    //   {
    //   date:'2021年4月29日15:23:37',
    //   sportType:'跑步',
    //   sportTime:'40秒',
    //   cal:'0.04',
    //   imgUrl:'../../images/running.png',
    // },
    // {
    //   date:'2021年4月29日15:11:13',
    //   sportType:'跑步',
    //   sportTime:'16秒',
    //   cal:'0.02',
    //   imgUrl:'../../images/running.png',
    // },
    // {
    //   date:'2021年4月28日21:28:02',
    //   sportType:'跳绳',
    //   sportTime:'20秒',
    //   cal:'0.08',
    //   imgUrl:'../../images/skipping.png',
    // },
    // {
    //   date:'2021年4月28日21:33:21',
    //   sportType:'瑜伽',
    //   sportTime:'12秒',
    //   cal:'0.01',
    //   imgUrl:'../../images/yoga.png',
    // },
    // {
    //   date:'2021年4月28日21:40:11',
    //   sportType:'Hiit',
    //   sportTime:'10秒',
    //   cal:'0.02',
    //   imgUrl:'../../images/hiitSenior.png',
    // },
   
  ]
  },
  onLoad:function(){
    let that = this;
    wx.request({
      url: 'http://localhost:3000/miniuser/getUserData',
      data:{
        userName:app.userInfo.nickName
      },
      method:'POST',
      success:(res)=>{
        console.log(res);
        const hist = res.data.list.exercisesHistory
        const arr = hist.map(i=>{
          if(i.sportType==='跑步'){
            return {...i,imgUrl:that.data.imgUrlList.running}
          }
          if(i.sportType==='Hiit'){
            return {...i,imgUrl:that.data.imgUrlList.hiit}
          }
          if(i.sportType==='瑜伽'){
            return {...i,imgUrl:that.data.imgUrlList.yoga}
          }
          if(i.sportType==='跳绳'){
            return {...i,imgUrl:that.data.imgUrlList.skipping}
          }
        })
        console.log(arr);
        that.setData({
          exerciseList:arr
        })
      }
    })
  }
})
