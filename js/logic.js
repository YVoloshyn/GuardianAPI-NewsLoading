$(document).ready(function() {
  loadMainInfo();
  });

function loadMainInfo() {
  const $loading = $('div.loading');
  const $news    = $('div.news');
  const $heading = $('#heading');

  $( ".news" ).empty();
  $(".addInfo").hide();
  $(".addInfo div").click(function() {
      $(this).next("p").slideToggle("slow").siblings("p:visible")
      .slideUp("slow");
  });
  var dataLoading = $.get("https://content.guardianapis.com/search?show-blocks=body&api-key=942512ab-eac1-48d3-bb94-c4360d852aa9", function(data) {
      var news = data.response.results;
        for (var i = 0; i < news.length; i++) {
          var article = news[i];
          $news.append('<h5 class="newsText">' + '<a href="#">' + article.webTitle + '</a>' + '</h3>' +
                       '<div class="addInfo">' + article.blocks.body[0].bodyHtml + '</div>');
        }
        $loading.hide();
        document.getElementById("refreshBtn").type  = "submit";
  }).fail(function() {
    $heading.hide();
    $loading.hide();
    $('errImage').style.display = "block";
  });
}
