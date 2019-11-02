let myCars = {}; //корзина
  $(document).ready(function(){
  	loadGood();
  	checkCarts();
 // $.ajax ({
   // url: "https://www.googleapis.com/books/v1/volumes?q=" ,
    //dataType: "json",

//    success: function(data){
  //    var innerHTML = "";
  //    for(var i=0; i < data.items.length; i++){
        
//		if(data.items[i].volumeInfo.title && data.items[i].volumeInfo.imageLinks &&
//		 data.items[i].volumeInfo.imageLinks.smallThumbnail){
//		innerHTML += "<span class='col-md-4' title='>" + data.items[i].volumeInfo.title + "'</span>" +
//         "<img class='col-md-4' src='" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "'>";
//		}
//    }
//	$('#product').html(innerHTML);
      
//    },
//    type: 'GET'
//  });

});

  function loadGood(){
	let data = Cars
	let out = '';
		for (let key in data){
			out+='<div class ="first-goods">';
			out +='<h4 class="name">' +data[key]['name']+'</h4>';
			out +='<img data-id="'+key+'" class="oldCars" src="'+data[key].imageUrl+'">';
			out += '</div>';
		}
	$('#product').html(out);
	$('.oldCars').on('click', addToCart);
}

function addToCart(){
	//добавление в корзину
	let id = $(this).attr('data-id');
	if (myCars[id]!=undefined) {
		myCars[id]++;
	}else{
		myCars[id] = 1;
	}
	localStorage.setItem('myCars', JSON.stringify(myCars) );
	showShoppingBasket();

}

function checkCarts(){
	 if (localStorage.getItem('myCars')!=null) {
	 	myCars = JSON.parse(localStorage.getItem('myCars'));
	 }
}
function showShoppingBasket(){
	//содержимое корзины
	let out = '';
	for (let w in myCars){
		out +=w + '---' +myCars[w]+'<br>';
	}
	$('#shoppingBasket').html(out);
}
   
























