// model.js
// 電話情報を管理するModel
var Address = Backbone.Model.extend({
  defaults: function(){
    return {
      language: 'jp'
    };
  },

  initialize: function(){
    _.bindAll(this);
    this.on('initialize', this.setRegisterDate);
    this.trigger('initialize');
  },

  setRegisterDate: function(){
    this.set('registerDate', new Date());
  }
});