const User = require('./User')

describe('User class tests', () => {
  let user
  beforeEach(() => {
    validUser = new User(123, 'Melina', 'melina@email.com', '1@3b4C5d', '12234567809', 'Curitiba', 'Vila Izabel', '80620000')

    invalidUser = new User(123, 'Melina', 'melina@email', 123456, '12234567', 'Curitiba', 'Vila Izabel', '806200')
  })

  it('should verify if instance User is being created correctly', () => {
    expect(validUser instanceof User).toBeTruthy()
  })

  it('should instance User with valid data', () => {
    expect(validUser.id).toBe(123)
    expect(validUser.name).toBe('Melina')
    expect(validUser.email).toBe('melina@email.com')
    expect(validUser.password).toBe('1@3b4C5d')
    expect(validUser.cpf).toBe('12234567809')
    expect(validUser.city).toBe('Curitiba')
    expect(validUser.neighborhood).toBe('Vila Izabel')
    expect(validUser.cep).toBe('80620000')
  })

  it('should return true if email is valid', () => {
    const verifiedEmail = validUser.verifyEmail()
    expect(verifiedEmail).toBeTruthy()
  })

  it('should return false if email is invalid', () => {
    const verifiedEmail = invalidUser.verifyEmail()
    expect(verifiedEmail).toBeFalsy()
  })

  it('should return true if password is valid', () => {
    const verifiedPassword = validUser.verifyPassword()
    expect(verifiedPassword).toBeTruthy()
  })

  it('should return false if password is invalid', () => {
    const verifiedPassword = invalidUser.verifyPassword()
    expect(verifiedPassword).toBeFalsy()
  })

  it('should return true if cpf is valid', () => {
    const verifiedCpf = validUser.verifyCpf()
    expect(verifiedCpf).toBeTruthy()
  })

  it('should return false if cpf is invalid', () => {
    const verifiedCpf = invalidUser.verifyCpf()
    expect(verifiedCpf).toBeFalsy()
  })

  it('should return true if cep is valid', () => {
    const verifiedCep = validUser.verifyCep()
    expect(verifiedCep).toBeTruthy()
  })

  it('should return false if cep is invalid', () => {
    const verifiedCep = invalidUser.verifyCep()
    expect(verifiedCep).toBeFalsy()
  })
})