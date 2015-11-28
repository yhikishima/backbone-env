'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextNumber = (function () {
  function TextNumber() {
    _classCallCheck(this, TextNumber);

    this.func();
    consoel.log('ddd');
  }

  _createClass(TextNumber, null, [{
    key: 'func',
    value: function func() {
      console.log('test');
    }
  }]);

  return TextNumber;
})();

// console.log(new Backbone.Marionette.Application());

var App = new Backbone.Marionette.Application();

// App起動時に呼ばれる
App.addInitializer(function () {
  console.log('init');
});

// Appを起動
App.start();