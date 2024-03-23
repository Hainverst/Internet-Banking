
const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")
const Installment = require("./Installment")

module.exports = class App {
   static #Users = []

   static findUser( email ) {
    const user = this.#Users.find( user => user.email === email)
    return user ?? null 
   }

   static createUser( fullname, email ) {
    const userExists = App.findUser(email)
    if (!userExists) {
        this.#Users.push(new User(fullname, email))
    } else if (userExists){
        throw new Error ('O usuário já existe.')
    }
   }

   static deposit( email, amount) {
    const user = App.findUser(email)
    if (user) {
        const addDeposit = new Deposit (amount)
        user.account.newDeposit(addDeposit)
    }
   }
   static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer)
      toUser.account.addTransfer(newTransfer)
    }
  }

  static takeLoan(email, amount, numberOfInstallments) {
    const user = App.findUser(email)
    if (user) {
      const addLoan = new Loan(amount, numberOfInstallments)
      user.account.newLoan(addLoan)
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }


  static markInstallmentAsPaid(email, number) {
    const user = App.findUser(email);
    const installmentToMark = number 
    if (user && installmentToMark) {
            Installment.markAsPaid(number);
            console.log(`A parcela número ${installmentToMark} foi marcada como paga.`);
        } else {
            console.log(`Parcela ou usuários não encontrados.`);
        }
    }
} 




   

   


