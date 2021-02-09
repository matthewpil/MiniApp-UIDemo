var google = "https://www.google.com/";
var custom = "/c:/MiniApps/Training-Demo/Resources/test.html"

Page({
  data: { url: google },
  onLoad() {
    this.webViewContext = my.createWebViewContext('web-view-1');
  },
  onMessage(e) {
    console.log(e.detail);
    this.webViewContext.postMessage('World');
  }

});
