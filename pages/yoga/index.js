// pages/yoga/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yogaList:[{
      name:'呼吸放松控制法',
      videoUrl:'http://81.71.142.81/yoga1.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4057.jpg'
    },{
      name:'肩颈腰部伸展',
      videoUrl:'http://81.71.142.81/yoga2.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4059.jpg'
    },{
      name:'瑜伽初级入门',
      videoUrl:'http://81.71.142.81/yoga3.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4061.jpg'
    },{
      name:'基础站姿分解',
      videoUrl:'http://81.71.142.81/yoga4.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4065.jpg'
    },{
      name:'拜日式AB分解',
      videoUrl:'http://81.71.142.81/yoga5.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4063.jpg'
    },{
      name:'全身心放松体式',
      videoUrl:'http://81.71.142.81/yoga6.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4058.jpg'
    },{
      name:'眼镜蛇式瑜伽动作',
      videoUrl:'http://81.71.142.81/yoga7.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4064.jpg'
    },{
      name:'普拉提瘦腰',
      videoUrl:'http://81.71.142.81/yoga8.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4067.jpg'
    },{
      name:'普拉提提臀',
      videoUrl:'http://81.71.142.81/yoga9.mp4',
      imageUrl:'https://static1.keepcdn.com/2016/12/24/13/1482558732011_315x201.jpg'
    },{
      name:'普拉提增肌',
      videoUrl:'http://81.71.142.81/yoga10.mp4',
      imageUrl:'https://static1.keepcdn.com/thumbnail/2016/12/23/YT4068.jpg'
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