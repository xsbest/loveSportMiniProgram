let that;
function getLocation(){
  wx.getLocation({
    type: 'gcj02',
    success: function (res) {
      // console.log(res);
      that.setData({
        curlatitude: res.latitude,
        curlongitude: res.longitude,
        polyline: [{
          points: [{
              latitude: res.latitude,
              longitude: res.longitude
            },
          ],
          color: '#000',
          width: 30,
        }]
      })
      console.log(res.longitude, that.data.polyline);
    },
    fail: function () {
      // console.log(123);
    },
  })
}
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    curlongitude: 0,
    curlatitude: 0,
    markers: [],
    polyline: []
  },
  onLoad(options) {
    that = this;
    this.setData({
      sportType: options.sport,
    })
    getLocation()
    wx.startLocationUpdate({
      success: function (res) {
        wx.onLocationChange((result) => {
          that.setData({
            markers: [{
              id: 1,
              width: 50,
              height: 50,
              latitude: result.latitude,
              longitude: result.longitude,
              iconPath: '../../images/running.png'
            }],
            polyline: [{
              points: [...that.data.polyline.points,
                {
                  latitude: result.latitude,
                  longitude: result.latitude,
                }
              ],
              color: '#000',
              width: 30,
            }]
          })
        })
        console.log(res);
      },
      fail: function () {
        console.log(21111);
      }
    })

  },

})