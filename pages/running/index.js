
var point = [];
var that2;
let count;
 
function drawline() {
    that2.setData({
       polyline : [{
          points : point,
           color : '#99FF00',
           width : 4,
           dottedLine : false
       }]
    });
}
 
//获取经纬度
function getlocation() {
    var lat, lng;
    wx.getLocation({
       type : 'gcj02',
        success : function (res) {
            lat = res.latitude;
            lng = res.longitude;
            point.push({latitude: lat, longitude : lng});
            // console.log(point);
        }
    });
}
 
Page({
   data : {
       polyline : [],
       nbFrontColor: '#000000',
       nbBackgroundColor: '#ffffff',
       min: 0,
       seconds: 0,
       ms: 0,
       cal: 0,
       START: true,
       STOP: false,
       END: false,
       GROUP: false,
   },
   start() {
       this.startRun();
    this.setData({
   
      STOP: true,
      END: true,
      START: false,
    })
    count = setInterval(() => {
      this.setData({
        ms: this.data.ms + 1
      })
      if (this.data.ms === 100) {
        this.setData({
          ms: 0,
          seconds: this.data.seconds + 1,
        })
        this.setData({
          cal: (1 / 360 * this.data.seconds).toFixed(2)
        })
      }
    }, 10)
  },
  end() {
      this.endRun();
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认要结束运动吗，不再坚持一下下？',
      success (res) {
        if (res.confirm) {
          clearInterval(count)
          that.setData({
            min: 0,
            seconds: 0,
            ms: 0,
            cal:0,
            STOP: false,
            END: false,
            START: true,
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  stop() {
    clearInterval(count)
    this.setData({
      STOP: false,
      END: true,
      START: true,
    })
  },
  show(showItems) {
    this.setData({
      showItems: [...this.data.showItems, ...showItems]
    })
  },
 
    onLoad : function () {
        that2 = this;
        wx.getLocation({
 
            success : function (res) {
                that2.setData({
                    longitude : res.longitude,
                    latitude : res.latitude,
                });
            }
        });
    },
 
    startRun : function () {
        this.timer = setInterval(repeat, 1000);
        function repeat() {
            console.log('re');
            getlocation();
        
            drawline();
        }
    },
    endRun : function () {
        wx.showToast({
            title: '您已经跑步'+that2.addDistance().toString()+'米',
            icon:'none'
          }) 
        clearInterval(this.timer);
    },
    calculateDistance:function(lat1, lng1, lat2, lng2) {
        lat1 = lat1 || 0;
        lng1 = lng1 || 0;
        lat2 = lat2 || 0;
        lng2 = lng2 || 0;
        var rad1 = lat1 * Math.PI / 180.0;
        var rad2 = lat2 * Math.PI / 180.0;
        var a = rad1 - rad2;
        var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
        var r = 6378137;
        var distance = r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)));
        return distance;
      },
    addDistance:function(){
        const points = that2.data.polyline[0].points;
        console.log(points);
        let totalDistance = 0;
       for(let i = 1;i < points.length;i++){
           console.log(points[i-1].latitude,points[i-1].longitude
            ,points[i].latitude,points[i].longitude);
        totalDistance+= that2.calculateDistance(points[i-1].latitude,points[i-1].longitude
            ,points[i].latitude,points[i].longitude);
       } 
       console.log(totalDistance);
       return totalDistance;
    }
});
