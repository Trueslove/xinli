Page({
  data: {
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
  handleSubmit() {
    tt.navigateTo({
      url: '/pages/question/index' // 指定页面的url
    });
  }
})
