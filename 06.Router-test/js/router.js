// router.js

var Router = Backbone.Router.extend({
  routes : {  // ハッシュフラグメントと対応するメソッド名の組を設定する
    ''           : 'index',
    'mypage'     : 'mypage',
    'blog(/:id)' : 'blog'
  },

  index : function index() {
    // ハッシュなしでアクセスされたときの処理を書く
    console.log('index', arguments);
    Backbone.history.navigate('blog/10', false);
  },

  mypage : function mypage() {
    // #mypageでアクセスされたときの処理を書く
    console.log('mypage', arguments);
  },

  blog : function blog(id) {
    // #blog（または#blog/123など）でアクセスされたときの処理を書く
    console.log('blog', arguments);
  }
});

var router = new Router();
Backbone.history.start();


