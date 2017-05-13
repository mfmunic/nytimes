
var query
var bDate
var eDate

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "02bae414f0b840cfa037ba9a60bc5139",
  'q':" + query + " ,
  'begin_date': " + bDate +",
  'end_date': " +eDate +"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});