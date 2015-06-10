// app.js
var app = app || {};

(function(app) {
  var books = [
    {title: 'js:good parts', author: 'das', releaseDate: '2008/1/1', keywords: 'jsプログラミング'},
    {title: 'js:bad parts', author: 'jsb', releaseDate: '2008/1/1', keywords: 'jsプログラミング'}
  ];

  new app.LibraryView(books);

})(app || (app = {}));