const Customer = require("./Customer")
class Auth {
    constructor() {
        this.customers = []
    }

    register(name,email,shippingAddress) {
        this.customers.push(new Customer(name,email,shippingAddress))
    }

    login(email) {
        let rtn = null
        this.customers.forEach((customer) => {
            if (customer.email === email) {
                rtn = customer
            }
        })
        return rtn
    }
}

module.exports = Auth