
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
  console.log('init');
});

// Appを起動
App.start();