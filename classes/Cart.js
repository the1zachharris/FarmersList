class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }
    addProduct(Product, total) {
        this.products.push(Product);
        this.total += total;
    }
    removeProduct(Product, total) {
        this.products.forEach((item, index) => {
            if (item === Product) {
                this.products.splice(index, 1);
                this.total -= total
            }
        })
    }
}


module.exports = { Cart };