Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad() {
    this.setData({
      nbTitle: '选择运动项目',
      nbLoading: false,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#888',
    })
  },
  goTo(e){
    const sport = e.currentTarget.dataset['sport']
    if(sport === 'running'  || sport === 'skipping'){
      console.log(1);
      wx.navigateTo({
        url: '../'+sport+'/index?sport='+sport,
      })
    }else if(sport === 'jogging'){
      wx.navigateTo({
        url: '../running/index?sport='+sport,
      })
    }
    else{
      wx.navigateTo({
        url: '../movieTeaching/index?sport='+sport,
      })
    }

  }
})