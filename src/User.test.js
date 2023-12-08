const User = require('./User')

describe('User class tests', () => {
  
  beforeEach(() => {
    validUser = new User(123, 'Melina', 'melina@email.com', '1@3b4C5d', '12234567809', 'Curitiba', 'Vila Izabel', '80620000')

    invalidUser = new User(123, 'Melina', 'melina@email', 123456, '12234567', 'Curitiba', 'Vila Izabel', '806200')
  })

  it('should verify if instance User is being created correctly', () => {
    expect(validUser instanceof User).toBeTruthy()
  })

  it('should instance User with valid data', () => {
    expect(validUser.getId()).toBe(123)
    expect(validUser.getName()).toBe('Melina')
    expect(validUser.getEmail()).toBe('melina@email.com')
    expect(validUser.getPassword()).toBe('1@3b4C5d')
    expect(validUser.getCpf()).toBe('12234567809')
    expect(validUser.getCity()).toBe('Curitiba')
    expect(validUser.getNeighborhood()).toBe('Vila Izabel')
    expect(validUser.getCep()).toBe('80620000')
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

  it('should get User id', () => {
    const result = validUser.getId()
    expect(result).toEqual(123)
  })

  it('should set new User id', () => {
    validUser.setId(234)
    expect(validUser.getId()).toEqual(234)
  })

  it('should get User name', () => {
    const result = validUser.getName()
    expect(result).toEqual('Melina')
  })

  it('should set new User name', () => {
    validUser.setName('Maria')
    expect(validUser.getName()).toEqual('Maria')
  })

  it('should get User email', () => {
    const result = validUser.getEmail()
    expect(result).toEqual('melina@email.com')
  })

  it('should set new User email', () => {
    validUser.setEmail('maria@email.com')
    expect(validUser.getEmail()).toEqual('maria@email.com')
  })

  it('should get User password', () => {
    const result = validUser.getPassword()
    expect(result).toEqual('1@3b4C5d')
  })

  it('should set new User password', () => {
    validUser.setPassword('9&8f7G6h')
    expect(validUser.getPassword()).toEqual('9&8f7G6h')
  })

  it('should get User cpf', () => {
    const result = validUser.getCpf()
    expect(result).toEqual('12234567809')
  })

  it('should set new User cpf', () => {
    validUser.setCpf('22233344456')
    expect(validUser.getCpf()).toEqual('22233344456')
  })

  it('should get User city', () => {
    const result = validUser.getCity()
    expect(result).toEqual('Curitiba')
  })

  it('should set new User city', () => {
    validUser.setCity('Mafra')
    expect(validUser.getCity()).toEqual('Mafra')
  })

  it('should get User neighborhood', () => {
    const result = validUser.getNeighborhood()
    expect(result).toEqual('Vila Izabel')
  })

  it('should set new User neighborhood', () => {
    validUser.setNeighborhood('Vila Nova')
    expect(validUser.getNeighborhood()).toEqual('Vila Nova')
  })

  it('should get User cep', () => {
    const result = validUser.getCep()
    expect(result).toEqual('80620000')
  })

  it('should set new User cep', () => {
    validUser.setCep('10621111')
    expect(validUser.getCep()).toEqual('10621111')
  })
})