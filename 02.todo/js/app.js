(function(){
/*
 モデルの設計
 Food: {
  name: "名前",
  calory: "カロリー"
 }
*/

  // Model
  var Food = Backbone.Model.extend({
    default: {
      name: '',
      calory: 0
    },

    initialize: function() {
      if ( !this.get('name') ) {
        this.set('name', this.defaults.name);
      }
      if ( !this.get('calory') ) {
        this.set('calory',  this.defaults.calory);
      }
    }
  });

  // Collection
  var FoodCollection = Backbone.Collection.extend({
    model: Food
  });

  // インスタンス化
  var fc = new FoodCollection({name:'steaks', calory:400});

  // fc.each(function(e, i) {
  //   console.log(e.get('name'));
  // });
  // console.log(fc.models[0].get('name'));

  // View
  var FoodView = Backbone.View.extend({
    tagName: 'li',
    className: 'food',
    initialize: function() {
      this.render();
    },
    render: function() {
      // console.log(this.model.get('name'));

      var tmpName = $('<span class="name">').text(this.model.get('name'));
      var tmpCalory = $('<span class="calory">').text(this.model.get('calory'));

      $(this.el).html(tmpName).append(tmpCalory);
      return this;
    }
  });

  var FoodListView = Backbone.View.extend({
    el: $('#list'),
    initialize: function() {
      this.render();
    },
    render: function() {
      $(this.el).append($('<ul>'));
    },
    add: function(food) {
      var viewIns = new FoodView({model: food});
      $(this.el).find('ul').append(viewIns.el);
    },
    addAll: function() {
      fc.each(this.add, this);
    }
  });

  var AppView = Backbone.View.extend({
    el: $('#app'),
    views: {},
    initialize: function() {
      this.views.foodlist = new FoodListView();
      this.views.foodlist.addAll();
      // fc.on('add', this.views.foodlist.add, this.views.foodlist);
      // fc.on('reset', this.views.foodlist.addAll, this.views.foodlist);
      // fc.fetch({reset:true});
    }
  });

  var App = new AppView();

})();
