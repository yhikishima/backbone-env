var app = app || {};

app.Todo = Backbone.Model.exted({
  defaults: {
    titile: '',
    completed: false
  },

  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }

});