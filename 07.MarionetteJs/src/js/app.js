
class TextNumber {
  constructor() {
    this.func();
    consoel.log('ddd');
  }

  static func() {
    console.log('test');
  }
}

// console.log(new Backbone.Marionette.Application());
let App = new Backbone.Marionette.Application();

// App起動時に呼ばれる
App.addInitializer(() => {
  var router = new Router();
});

let Router = Backbone.Router.extend({
  routes: {
    "": "index",
    ":cotent": "changeContent"
  },
  index: () => {
    console.log('index');
  },
  changeContent: () => {
    console.log('changeContent');
  }
});


App.module('MyModule', (MyModule) => {
  MyModule.Controller = Backbone.Marionette.Controller.extend({
  });

  MyModule.addInitializer(() => {
    // 例：モジュールの`start`に合わせてインスタンスを生成
    console.log('start');
    MyModule.Controller = new MyModule.Controller();
  });

  MyModule.addFinalizer(() => {
    // 例：モジュールの`stop`に合わせてインスタンスを破棄
    MyModule.Controller.close();
    console.log('close');
    delete MyModule.Controller;
  });
});

// Appを起動
App.start();