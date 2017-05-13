





$("#runSearch").on("click", searchArt)

function searchArt(){

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var query = $("#searchTerm")
var bDate
var eDate
$("")
query = "trump"
bDate = 2000
eDate = 2010

url += '?' + $.param({
  'api-key': "02bae414f0b840cfa037ba9a60bc5139",
  'q':query ,
  'begin_date': bDate + "0101",
  'end_date': eDate + "0101"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});//end of ajax

}//end of main function