var app = app || {};

var TodoList = Backbone.Collection.extend({
  modal: app.Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  completed: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },

  remainig: function() {
    return this.without.apply(this, this.completed());
  },

  nextOrder: function() {
    if( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  comparator: function(todo) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();