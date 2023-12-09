const Trader = require('./Trader')
const Offer = require('./Offer')

describe('Trader class tests', () => {

  const validOffer = new Offer(123, 'product', 'manufacturing', 'cerâmica')
  const invalidOffer = new Offer(123, 'product', 'manufacturing', 'vela')

  let validTrader

  beforeEach(() => {
    validTrader = new Trader(123, 'Melina', 'melina@email.com', '1@3b4C5d', '12234567809', 'Curitiba', 'Vila Izabel', '80620000', '991990030', '@melina')

    invalidTrader = new Trader(123, 'Melina', 'melina@email', 123456, '12234567', 'Curitiba', 'Vila Izabel', '806200', '9919900', 'melina')
  })

  it('should verify if instance Trader is being created correctly', () => {
    expect(validTrader instanceof Trader).toBeTruthy()
  })

  it('should instance Trader with valid data', () => {
    expect(validTrader.getId()).toBe(123)
    expect(validTrader.getName()).toBe('Melina')
    expect(validTrader.getEmail()).toBe('melina@email.com')
    expect(validTrader.getPassword()).toBe('1@3b4C5d')
    expect(validTrader.getCpf()).toBe('12234567809')
    expect(validTrader.getCity()).toBe('Curitiba')
    expect(validTrader.getNeighborhood()).toBe('Vila Izabel')
    expect(validTrader.getCep()).toBe('80620000')
    expect(validTrader.getPhone()).toBe('991990030')
    expect(validTrader.getInstagram()).toBe('@melina')
  })

  it('should return true if phone is valid', () => {
    const verifiedPhone = validTrader.verifyPhone()
    expect(verifiedPhone).toBeTruthy()
  })

  it('should return false if phone is invalid', () => {
    const verifiedPhone = invalidTrader.verifyPhone()
    expect(verifiedPhone).toBeFalsy()
  })

  it('should add and remove an offer from array list of offers', () => {
    expect(validTrader.offers.length).toBe(0)
    validTrader.addOffer(validOffer)
    expect(validTrader.offers.length).toBe(1)
    validTrader.removeOffer(validOffer)
    expect(validTrader.offers.length).toBe(0)
  })

  it('should return error message if adding an invalid offer', () => {
    expect(() => validTrader.addOffer(validTrader)).toThrow('Não foi possível adicionar a oferta')
  })

  it('should return error message if removing an inexistent offer', () => {
    expect(() => validTrader.removeOffer(invalidOffer)).toThrow('Oferta inexistente')
  })

  it('should return error message if removing an invalid offer', () => {
    expect(() => validTrader.removeOffer(validTrader)).toThrow('Não foi possível remover a oferta')
  })

  it('should get Trader phone', () => {
    const result = validTrader.getPhone()
    expect(result).toEqual('991990030')
  })

  it('should set new Trader phone', () => {
    validTrader.setPhone('981991151')
    expect(validTrader.getPhone()).toEqual('981991151')
  })

  it('should get Trader instagram', () => {
    const result = validTrader.getInstagram()
    expect(result).toEqual('@melina')
  })

  it('should set new Trader instagram', () => {
    validTrader.setInstagram('@maria')
    expect(validTrader.getInstagram()).toEqual('@maria')
  })
})