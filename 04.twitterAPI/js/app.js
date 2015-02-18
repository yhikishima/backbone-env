(function(){
  // ツイートのモデル
  var TweetModel = Backbone.Model.extend({
    initialize: function () {
      this.set({
          domId: 'tweet_' + this.cid
      });
    }
  });

  // ツイートのコレクション
  var TweetCollection = Backbone.Collection.extend({
      model: TweetModel
  });

  // ツイートのビュー
  var TweetView = Backbone.View.extend({
    render: function () {
      this.el = $("#tweetTemplate").tmpl( this.model.toJSON(), this );
      return this;
    },
    time_ago: function(time){
      var ints = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2592000,
        year: 31536000
      };
      time = +new Date(time);
      var gap = ((+new Date()) - time) / 1000,
        amount, measure;
      for (var i in ints) {
        if (gap > ints[i]) { measure = i; }
      }
      amount = gap / ints[measure];
      amount = gap > ints.day ? (Math.round(amount * 100) / 100) : Math.round(amount);
      amount += ' ' + measure + (amount > 1 ? 's' : '') + ' ago';
      return amount || 0;
    }
  });

  // アプリケーションのモデル
  var ApplicationModel = Backbone.Model.extend({
    initialize: function () {
      this.tweets = new TweetCollection();
    }
  });

  // アプリケーションのビュー
  var ApplicationView = Backbone.View.extend({
    initialize: function () {
      this.model.tweets.bind('add', this.addTweet);
      this.model.tweets.bind('remove', this.removeTweet);
    },
    render: function () {
      this.el = $( "#tweetContainer" );
      return this;
    },
    addTweet: function (tweet) {
      var tModel = new TweetModel(tweet);
      var tView = new TweetView({model: tModel});
      this.render().el.append(tView.render().el);
    },
    removeTweet: function (tweet) {
      $('#' + tweet.get('domId')).remove();
    }
  });

  // 検索ボタンを押すとTwitterから検索
  $("#searchBtn").click(function(e){
      var jqxhr = $.ajax({
          dataType: "jsonp",
          url: "http://search.twitter.com/search.json",
          data: { q: encodeURI( $( "#searchTxt" ).val() ) },
          jsonp: "callback"
      });
      jqxhr.done(function(data){
    _.each(data.results, function(result){
       appView.addTweet(result);
    });
      });
  });

  var appModel = new ApplicationModel({});
  var appView =  new ApplicationView({model: appModel});

})();
