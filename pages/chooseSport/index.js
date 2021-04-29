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
      wx.navigateTo({
        url: '../'+sport+'/index?sport='+sport,
      })
  }
})