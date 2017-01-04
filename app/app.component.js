/*
* @Author: Administrator
* @Date:   2016-12-30 14:29:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-30 14:29:34
*/

'use strict';
(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
