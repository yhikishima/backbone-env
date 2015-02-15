(function(){
  // Model
  var MyModel = Backbone.Model.extend({
    method: function() {
      console.log('hello, world');
    }
  });
  var myModel = new MyModel();
  myModel.method();

  // Collection
  var MyCollection = Backbone.Collection.extend({});

  var myCollection = new MyCollection([
    {name: 'hoge'},
    {name: 'huga'}
  ]);

  myCollection.each(function(e, i) {
    console.log('['+ i +']' + e.get('name'));
  });


  // view
  var MyView = Backbone.View.extend({
    render: function() {
      this.$el.text('hello View!');
      return this;
    }
  });

  var myView = new MyView();

  $('body').append(myView.render().el);

})();
