let count;
Page({
  data: {
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
  onLoad(options) {
    //  this.start()
  },
  start() {
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
  }
})