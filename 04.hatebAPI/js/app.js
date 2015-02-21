
(function() {
  // アプリケーションのモデル
  var ApplicationModel = Backbone.Model.extend({});

  // アプリケーションのコレクション
  var ApplicationCollection = Backbone.Collection.extend({});

  // アプリケーションのビュー
  var ApplicationView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    render: function () {
      this.el = $("#hatena");
      return this;
    },
    addTweet: function (hateb) {
      this.el.append(hateb.bookmarks[0].comment);
    }
  });

  // 検索ボタンを押すとはてぶから検索
  $("#searchBtn").click(function(e){
      var jqxhr = $.ajax({
          dataType: "jsonp",
          url: "http://b.hatena.ne.jp/entry/json/?url=http%3A%2F%2Fwww.hatena.ne.jp%2F"
      });
      jqxhr.done(function(data){
        appView.addTweet(data);
      });
  });

  var appModel = new ApplicationModel({});
  var appView =  new ApplicationView({});

})();



// google.load("feeds", "1");

// function initialize() {
//   var feedurl = "http://api.twitter.com/1/statuses/user_timeline.atom?screen_name=hiki";
//   var feed = new google.feeds.Feed(feedurl);
//   feed.setNumEntries(8);

//   feed.load(function (result){
//     if (!result.error){
//       var container = document.getElementById("feed");
//       var htmlstr = "";
//       htmlstr += '<h2><a href="' + result.feed.link + '">' + result.feed.title + '</a></h2>';

//       for (var i = 0; i < result.feed.entries.length; i++) {
//         var entry = result.feed.entries[i];

//         htmlstr += '<p class="posttitle">' + entry.content + '</p>';

//         var pdate = new Date(entry.publishedDate);
//         var strdate = pdate.getFullYear() + '年' + (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日' + pdate.getHours() + '時' + pdate.getMinutes() + '分' + pdate.getSeconds() + '秒';
//         htmlstr += '<p class="postdate"><a href="' + entry.link + '">' + strdate + '</a></p>';
//       }

//        container.innerHTML = htmlstr;
//     }else{
//        alert(result.error.code + ":" + result.error.message);
//     }
//   });
// }

// google.setOnLoadCallback(initialize);