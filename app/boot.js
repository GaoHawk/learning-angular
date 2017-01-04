/*
* @Author: Administrator
* @Date:   2016-12-30 14:34:08
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-30 14:34:24
*/

'use strict';
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
