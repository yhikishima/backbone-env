// collections.js

// 電話情報をまとめて管理するCollection
var AddressBook = Backbone.Collection.extend({
  model: Address,
  comparator: 'name',
  initialize: function(){
    _.bindAll(this);
    this.on('change', this.cbChange);
    console.log(this);
  },
  cbChange: function(model, collection){
    var index = this.indexOf(model);
    console.log(model);
  }
});