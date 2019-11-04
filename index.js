let myCars = {}; //корзина
  $(document).ready(function(){
  	loadGood();
  	//checkCarts();
 // $.ajax ({
 //   url: "http://157.245.226.94:8080/cars-v1_0/get-all" ,
 //   dataType: "json",

 // success: function(data){
 //     var innerHTML = "";
 //     for(var i=0; i < data.items.length; i++){
        
//		if(data.items[i].volumeInfo.title && data.items[i].volumeInfo.imageLinks &&
//		 data.items[i].volumeInfo.imageLinks.smallThumbnail){
//		innerHTML += "<span class='col-md-4' title='>" + data.items[i].volumeInfo.title + "'</span>" +
//         "<img class='col-md-4' src='" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "'>";
//		}
//   }
//	$('#product').html(innerHTML);
//    },
//    type: 'GET'
//  });

});

  function loadGood(){
	let data = Cars
	let out = '';
		for (let key in data){
			out +='<div class ="first-goods">';
			out +='<h4 class="name">' +data[key]['name']+'</h4>';
			out +='<img class="oldCars" src="'+data[key].imageUrl+'">';
			out +='<button class="buttonBuy" data-id="'+data[key]['name']+'">Add to Shopping Cart</button>';
			out += '</div>';
		}
	$('#product').html(out);
	$('button.buttonBuy').on('click', addToCart);
}
function addToCart(){
	let name = $(this).attr('data-id');
	let result = serviceStore.putProduct(name);
}

$('.containerCounter').on('click', buy);
	function buy(){
	swal('name');	
	}


































