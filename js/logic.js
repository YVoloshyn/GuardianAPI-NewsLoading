$(document).ready(function() {
  loadMainInfo();
  });

function loadMainInfo() {
  const $loading = $('div.loading');
  const $news    = $('div.news');
  const $heading = $('#heading');

  $( ".newsText" ).remove();
  var dataLoading = $.get("http://content.guardianapis.com/search?api-key=test", function(data) {
      var news = data.response.results;
        for (var i = 0; i < news.length; i++) {
          var article = news[i];
          $news.append('<p class="newsText">' + article.webTitle + '</p>');
        }
        $loading.hide();
        document.getElementById("refreshBtn").type  = "submit";
  }).fail(function() {
    $heading.hide();
    $loading.hide();
    document.getElementById("errImage").style.display = "block";
  });
}
