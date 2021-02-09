


Page({
  data: {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    iconType: [
      'success',
      'info',
      'warn',
      'waiting',
      'clear',
      'success_no_circle',
      'download',
      'cancel',
      'search',
    ],
    sizes:[10,20,30],
    color:["red","green","blue"],
    progress:10
  },
  onLoad() { },
  onPlus(){
    this.setData({
      progress:Math.min(100,this.data.progress+10)
    })
  }
});
