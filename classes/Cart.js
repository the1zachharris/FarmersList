class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }
    addProduct(Product) {
        this.products.push(Product);
        this.total += Product.price;
    }
    removeProduct(product) {
        this.total -= this.products.splice(product, 1)[0].price
    }
}


module.exports = Cart 