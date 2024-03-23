const App = require("./App");

App.createUser('Vinícius Martins', 'vinicius@gmail.com')
App.createUser('Rhayssa Mafra', 'rhayssa@gmail.com')
App.createUser("Juliana Conde", "juliana@email.com")

App.deposit('vinicius@gmail.com', 100)
App.transfer('vinicius@gmail.com', 'rhayssa@gmail.com', 50 )

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)

console.log(App.findUser("vinicius@gmail.com"))
console.log(App.findUser("vinicius@gmail.com").account)
console.log(App.findUser("rhayssa@gmail.com"))
console.log(App.findUser("rhayssa@gmail.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)
App.markInstallmentAsPaid("juliana@email.com", 1)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)

