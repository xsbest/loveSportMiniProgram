// pages/yoga/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yogaList:[{
      name:'开合跳',
      videoUrl:'https://static1.keepcdn.com/video/exercise/1501472233210/1501472233210_1501472245326_square.mp4',
      imageUrl:'https://static1.keepcdn.com/1501472233210_thumbnail_315_201_1501472264736.jpg'
    },{
      name:'高抬腿',
      videoUrl:'https://static1.keepcdn.com/video/exercise/1501475925081/1501475925081_1501475925298_square.mp4',
      imageUrl:'https://static1.keepcdn.com/1501475925081_thumbnail_315_201_1501475956691.jpg'
    },{
      name:'深蹲跳',
      videoUrl:'https://static1.keepcdn.com/video/exercise/1501472735224/1501472735224_1501472735372_square.mp4',
      imageUrl:'https://static1.keepcdn.com/cms_static/picture/1563527854622_1501472735224_1501472735372_normal_offset2.492171.jpg?imageView2/1/w/270/h/174'
    },{
      name:'原地摆臂快跑',
      videoUrl:'https://static1.keepcdn.com/video/exercise/1501476180793/1501476180793_1501476180987_square.mp4',
      imageUrl:'https://static1.keepcdn.com/cms_static/picture/1563527294526_1501476180793_1501476180987_square_offset1.235338.jpg?imageView2/1/w/270/h/174'
    },{
      name:'左右小跳',
      videoUrl:'https://static1.keepcdn.com/video/exercise/1501474177218/1501474177218_1501474275201_square.mp4',
      imageUrl:'https://static1.keepcdn.com/1501474177218_thumbnail_315_201_1501474294997.jpg'
    },{
      name:'高抬腿',
      videoUrl:'https://static1.keepcdn.com/video/exercise/1501475925081/1501475925081_1501475925298_square.mp4',
      imageUrl:'https://static1.keepcdn.com/1501475925081_thumbnail_315_201_1501475956691.jpg'
    },
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  play(e){
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: `../videoPlayer/index?url=${url}`,
    })
  }
})