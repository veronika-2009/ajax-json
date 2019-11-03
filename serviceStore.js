class ServiceStore{
	constructor(containerCounter){
		this.containerCounter = $(containerCounter);
		
	}

	getProducts(){
		let products = [];
		let productsLocalStorage = localStorage.getItem('products');
		if (productsLocalStorage !==null) {
			products = JSON.parse(productsLocalStorage);
			this.containerCounter.innerText = products.length;
		}
		return products;
	}


	putProduct(id){
		let products = this.getProducts();
		let index = products.indexOf(id);
		if (index === -1) {
			products.push(id);
		} else {
			products.splice(index, 1);
		}
		
		localStorage.setItem('products', JSON.stringify(products));
	}
}

let serviceStore = new ServiceStore('.containerCounter');