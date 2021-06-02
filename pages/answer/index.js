const app = getApp()

Page({
  data: {
    answer: ''
  },
  onLoad: function (options) {
    this.setData({
      answer: options.answer
    })
    console.log(options)
  }
})
