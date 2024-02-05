const { Customer } = require("./Customer")

class Auth {
    constructor() {
        this.customers = []
    }

    register(name,email,shippingAddress) {
        this.customers.push(new Customer(name,email,shippingAddress))
    }

    login(email) {
        this.customers.forEach((customer) => {
            if (customer.email === email) {
                return customer
            }
        })
    }
}


module.exports = {
    Auth
}