const Deposit = require("./Deposit")
const User = require("./User")

module.exports = class Account {
    #balance
   
    constructor(user) {
        this.deposits = []
        this.loans = []
        this.transfers = []
        this.owner = user
        this.#balance = 0
    }

    get accountBalance(){
        return this.#balance
    }

    newDeposit(deposit){
        this.#balance += deposit
        this.deposits.push(deposit)
    }

    newLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }
    
    addTransfer(transfer){
        if (transfer.toUser.email === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if(transfer.fromUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }
}

