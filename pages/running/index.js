Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad(options) {
    this.setData({
     sportType:options.sport,
     mapCtx:'',
     la:'1'
    })
    this.mapCtx = wx.createMapContext("myMap",);
    wx.getLocation({
     success:function(res){
        console.log(res);
        
      },
      fail:function(){
        console.log(123);
      },
      complete:function(){
        console.log(123);
      }
    })
  },
})