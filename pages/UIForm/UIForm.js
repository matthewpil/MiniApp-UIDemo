Page({
  data: {pickerIndex:0,pickerValues:['Spring', 'Summer', 'Autumn', 'Winter']},
  onLoad() {},
  onSubmit(e){
    console.log(e);
  },
  setPickerIndex(e){
    this.setData({
      pickerIndex:e.detail.value
    })
  }
});
