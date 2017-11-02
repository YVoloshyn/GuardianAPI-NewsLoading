$(document).ready(function() {
  const $news = $("div.news");

  $.get("http://content.guardianapis.com/search?api-key=test", function(data) {
           var news = data.response.results;

           for (var i = 0; i < news.length; i++) {
             var article = news[i];
             $news.append('<p>' + article.webTitle + '</p>');
           }
        });
});
