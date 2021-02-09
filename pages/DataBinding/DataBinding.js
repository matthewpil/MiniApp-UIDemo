Page({
  data:{
    heading:"Mini-App Example",
    id:0,
    condition:true
    
  },
  onToggleClick(){
    this.setData({
      condition:!this.data.condition,
    });
  }

});
