  $(document).ready(function(){

  $.ajax ({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",

    success: function(data){
      var innerHTML = "";
      for(var i=0; i < data.items.length; i++){
        
		if(data.items[i].volumeInfo.title && data.items[i].volumeInfo.imageLinks &&
		 data.items[i].volumeInfo.imageLinks.smallThumbnail){
		innerHTML += "<span class='col-md-4' title='>" + data.items[i].volumeInfo.title + "'</span>" +
         "<img class='col-md-4' src='" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "'>";
		}
    }
	$('#product').html(innerHTML);
      
    },
    type: 'GET'
  });



});






















