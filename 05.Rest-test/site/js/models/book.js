// book.js
var app = app || {};

(function(app) {
  app.Book = Backbone.Model.extend({
    defaults: {
      coverImage: 'img/sample.png',
      title: '無題',
      author: '不明',
      releaseDate: '不明',
      keywords: 'なし'
    }
  });

})(app || (app = {}));