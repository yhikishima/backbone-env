/*
MV(Modelデータ)とView（DOM描画）を分離する
View・・・Modelの変更結果を反映する仕組みを持つ
View・・・jsでhtml生成
model・・・表示情報を持つ
*/


var app = {};

(function(app){
  // Model
  app.Message = new Backbone.Model.extend({

    defaluts: {
      'content': ''
    }
  });

  // Collection
  app.MessageList = Backbone.Collection.extend({
    model: app.Message
  });

  var messageList = new app.MessageList();

  var message = new app.Message();

  message.set({'content': 'aaa'});

  messageList.add(message);

  // obj.set({name: "Murata"});
  // obj.set({age: 20});

  // console.log("obj: " + JSON.stringify(obj));
  // console.log("obj.name: " + obj.get("name"));

})(app || (app = {}));