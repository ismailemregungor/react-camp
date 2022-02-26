class Customer(){
    constructor(id, customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "12345")
//prototyping
customer.name = "ieg"
console.log(customer.name)

Customer.bisey = "bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class InvidiualCustomer extends Customer() {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer(){
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }

}