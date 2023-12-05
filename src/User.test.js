const User = require('./User')

describe('User class tests', () => {
  let user
  beforeEach(() => {
    user = new User(123, 'Melina', 'melina@email.com', '123456', '12234567809', 'Curitiba', 'Vila Izabel', '80620000')
  })
  it('should verify if email is valid', () => {
    const verifiedEmail = user.verifyEmail()
    expect(verifiedEmail).toBeTruthy()
  })

  it('should verify if password is valid', () => {
    const verifiedPassword = user.verifyPassword()
    expect(verifiedPassword).toBeTruthy()
  })

  it('should verify if cpf is valid', () => {
    const verifiedCpf = user.verifyCpf()
    expect(verifiedCpf).toBeTruthy()
  })
})