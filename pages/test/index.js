
var point = [];
var that2;
 
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
 
    start : function () {
        this.timer = setInterval(repeat, 1000);
        function repeat() {
            console.log('re');
            getlocation();
        
            drawline();
        }
    },
    end : function () {
        console.log('end');
        wx.showToast({
            title: that2.addDistance().toString()
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
