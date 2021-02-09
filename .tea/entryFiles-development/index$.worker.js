if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/Home/Home?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/UIMultimedia/UIMultimedia?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/UIForm/UIForm?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/UI-Components/UI-Components?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/DataBinding/DataBinding?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ConditionalRendering/ConditionalRendering?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ListRendering/ListRendering?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Template/Template?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Include/Include?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/UICanvas/UICanvas?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/UIWeb/UIWeb?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}