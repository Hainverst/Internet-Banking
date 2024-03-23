module.exports = class Installment {
    constructor(value, number) {
        this.value = value 
        this.number = number
        this.status = 'Pending' 
    }

    static markAsPaid(number) {
        this.number  = number
        Installment.status = 'Paid';
        
    }
}