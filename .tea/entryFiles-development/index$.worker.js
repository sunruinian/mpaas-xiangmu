if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
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
require('../../dist/alipay/app');
require('../../dist/alipay/components/uni-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../dist/alipay/components/uni-cell?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../dist/alipay/components/uni-refresh?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../dist/alipay/components/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../dist/alipay/components/nodata?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../dist/alipay/pages/news/news-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../dist/alipay/pages/news/news-page?hash=9718368d7e25f40d2b79db70b66b9984176dba7d');
require('../../dist/alipay/pages/news/index?hash=f067a9372f763c0abc4b68af25b3c3afbb3d21cc');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}