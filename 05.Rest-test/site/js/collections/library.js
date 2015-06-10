// library.js
var app = app || {};

(function(app) {
  app.Library = Backbone.Collection.extend({
    model: app.Book
  });

})(app || (app = {}));