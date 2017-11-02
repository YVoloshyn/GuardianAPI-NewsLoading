xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","http://content.guardianapis.com/search?api-key=test",false);
xmlhttp.send();

var resp = JSON.parse(xmlhttp.responseText);

for ( var each in resp.response.results ) {
  var nameOfNews = resp.response.results[each].webTitle;
  var id = "p" + (parseFloat(each)+1);
  document.getElementById(id).innerHTML = nameOfNews;
}
