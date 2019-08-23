const { Account } = require('../src/account')

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  test('account has a default balance', () => {
    expect(account.balance).toBe(0)
  })
})
