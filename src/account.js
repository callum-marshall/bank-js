class Account {
  constructor () {
    this.balance = 0
    this.depositHistory = []
  }

  deposit (value) {
    this.balance += value
    this.depositHistory.push(value)
  }

  withdraw (value) {
    this.balance -= value
  }

  printDeposits () {
    return this.depositHistory
  }
}

module.exports = {
  Account
}
