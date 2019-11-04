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


	putProduct(name){
		let products = this.getProducts();
		let index = products.indexOf(name);
		if (index === -1) {
			products.push(name);
		} else {
			products.splice(index, 1);
		}
		
		localStorage.setItem('products', JSON.stringify(products));
	}
}

let serviceStore = new ServiceStore('.containerCounter');