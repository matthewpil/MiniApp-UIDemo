Page({
  data: {length:0},
  onLoad() {},
  onIncrementLength(){
    this.setData({
      length:this.data.length+1
    })
  }
});
