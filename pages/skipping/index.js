let count ;
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    min:0,
    seconds:0,
    ms:0,
    btnAbled:'true',
    cal:0
  },
  onLoad(options) {
  //  this.start()
  },
  start(){
    this.setData({btnAbled:false, min:0,
      seconds:0,
      ms:0,})
    count= setInterval(()=>{
      this.setData({
        ms:this.data.ms+1
      })
      if(this.data.ms === 100){
        console.log((1/360 * this.data.seconds).toFixed(2));
        this.setData({
          ms:0,
          seconds:this.data.seconds+1,
        })
        this.setData({
          cal:(1/360 * this.data.seconds).toFixed(2)
        })
      }
    },10)
  },
  end(){
    clearInterval(count)
    this.setData({btnAbled:true,
     })
  }
})