$(document).ready(function() {
  loadMainInfo();
  $(document).on('click', function( event ) {
     if( $(event.target).closest(".addInfo").length )
     $(".addInfo").slideUp("slow");
     event.stopPropagation();
  });
  $(document).on('click','.newsText',function( event ) {
     $(this).siblings(".addInfo").slideToggle("slow");
     $(this).css("background", "#e8e7e1");
     return false;
  });
  });

function loadMainInfo() {
  const $loading = $('div.loading');
  const $news    = $('div.news');
  const $heading = $('#heading');

  $( ".news" ).empty();
  $(".addInfo").hide();
  var dataLoading = $.get("https://content.guardianapis.com/search?show-blocks=body&api-key=942512ab-eac1-48d3-bb94-c4360d852aa9", function(data) {
      var news = data.response.results;
        for (var i = 0; i < news.length; i++) {
          var article = news[i],
              additionalInfo =
              (article.blocks.body[0].bodyTextSummary.split('\.')[0]) + "." +
              (article.blocks.body[0].bodyTextSummary.split('\.')[1]) + "...";
          $news.append('<div class="eachNews">' +
                          '<div class=newsText>' + article.webTitle + '</div>'+
                          '<div class=addInfo>'  + additionalInfo + '</div>' +
                       '</div>');
        }
        $loading.hide();
        document.getElementById("refreshBtn").type  = "submit";
  }).fail(function() {
    $heading.hide();
    $loading.hide();
    $('errImage').style.display = "block";
  });
}
