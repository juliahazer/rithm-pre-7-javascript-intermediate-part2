$(document).ready(function(){
	function searchGiphy() {
		var searchTerm = $('#search').val();
		$('#search').val('');

		var url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`;
		$.getJSON(url, function(data){
			for (var i = 0; i < data.data.length && i < 3; i++){
				$('#results').prepend('<img class="giphyImg" src="' + data.data[i].images.fixed_width.url + '" />');
			}
		});
	};


	$('#searchBtn').click(searchGiphy);	

	$('#search').keypress(function (e) {
 		var key = e.which;
 		if(key == 13) { // the enter key code 
		   searchGiphy();
		   return false;  
		}
	}); 

	$('#removeBtn').click(function(){
		$('#results').empty();
	});

});

