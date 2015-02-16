(function(){
/*
 モデルの設計
Todo: {
  category: "カテゴリー",
  detail  : "詳細"
 }
*/

  // Model
  var Todo = Backbone.Model.extend({
    url: "users",
    defaults: {
      category: '',
      detail: ''
    },

    initialize: function() {
      if ( !this.get('category') ) {
        this.set('category', this.defaults.category);
      }
      if ( !this.get('detail') ) {
        this.set('detail',  this.defaults.detail);
      }
    }
  });

  // Collection
  var TodoCollection = Backbone.Collection.extend({
    model: Todo
  });

  // インスタンス化
  var TD = new TodoCollection({category:'勉強', detail:'javascript'});

  // View
  var TodoView = Backbone.View.extend({
    tagName: 'li',
    className: 'todo',
    initialize: function() {
      this.render();
    },
    render: function() {

      var tmpCategory = $('<span class="category">').text(this.model.get('category'));
      var tmpDetail = $('<span class="detail">').text(this.model.get('detail'));

      $(this.el).html(tmpCategory).append(tmpDetail);
      return this;
    }
  });

  var TodoListView = Backbone.View.extend({
    el: $('#list'),
    initialize: function() {
      this.render();
    },
    render: function() {
      $(this.el).append($('<ul>'));
    },
    add: function(food) {
      var viewIns = new TodoView({model: food});
      $(this.el).find('ul').append(viewIns.el);
    },
    addAll: function() {
      TD.each(this.add, this);
    }
  });

 // View to add new food interface 追加
  var NewView = Backbone.View.extend({
    el: $('#newTodo'),
    initialize: function() {
      this.render();
    },
    events:{
      'click button#newTodo-button': 'addTodo'
    },
    render: function() {
      var tmp = $('<input id="newTodo-category" placeholder="Input category."><input id="newTodo-detail" placeholder="Input Detail."><button id="newTodo-button">create</button>');
      $(this.el).html(tmp);
    },
    addTodo: function() {
      TD.create({
        category:$(this.el).find('input#newTodo-category').val(),
        detail:$(this.el).find('input#newTodo-detail').val()});
      this.render();
    }
  });

  var AppView = Backbone.View.extend({
    el: $('#app'),
    views: {},
    initialize: function() {
      this.views.todolist = new TodoListView();
      this.views.new = new NewView();

      TD.on('add', this.views.todolist.add, this.views.todolist);
      TD.on('reset', this.views.todolist.addAll, this.views.todolist);
      TD.fetch({reset:true});
    }
  });


  var App = new AppView();

})();
