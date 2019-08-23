class Account {
  constructor () {
    this.balance = 0
    this.deposit_history = []
  }

  deposit (value) {
    this.balance += value
    this.deposit_history.push(value)
  }

  withdraw (value) {
    this.balance -= value
  }
}

module.exports = {
  Account
}
