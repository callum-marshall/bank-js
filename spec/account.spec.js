const { Account } = require('../src/account')

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  test('account has a default balance', () => {
    expect(account.balance).toBe(0)
  })

  test('user can make a deposit', () => {
    account.deposit(200)
    expect(account.balance).toBe(200)
  })

  test('user can make a withdrawal', () => {
    account.deposit(200)
    account.withdraw(50)
    expect(account.balance).toBe(150)
  })
})
