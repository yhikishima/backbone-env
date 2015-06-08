// Model用のView
var AddressView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this);
  },
  render: function(){
    var json = this.model.attributes;
    var html = 'aaaaaaaaaaaaa';


    $(this.el).html(html);
    return this;
  }
}, {
  tmplate: $('#address-template').html()
});

// Collection用のView
var AddressBookView = Backbone.View.extend({
  el: '#addressBook',
  initialize: function(){
    _.bindAll(this);
    this.listenTo(this.collection, 'add', this.addAddressView);
  },

  addAddressView: function(model){
    var addressView = new AddressView({ model: model });
    this.$el.append(addressView.render().el);
  }
});