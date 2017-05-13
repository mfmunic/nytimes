$(document).ready(function(){

$("#runSearch").on("click", searchArt)

function searchArt(event){

	event.preventDefault();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	var query = $("#searchTerm").val();
	var bDate = $("#startYear").val();
	var eDate = $("#endYear").val();

	console.log(query)
	console.log(bDate)
	console.log(eDate)

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
		console.log(err);
  		// throw err;
	});//end of ajax

};//end of main function
});//end of document.ready