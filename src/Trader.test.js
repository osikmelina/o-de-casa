const Trader = require('./Trader')
const Offer = require('./Offer')

describe('Trader class tests', () => {

  beforeEach(() => {
    validTrader = new Trader(123, 'Melina', 'melina@email.com', '1@3b4C5d', '12234567809', 'Curitiba', 'Vila Izabel', '80620000', '991990030', '@melina')
  })

  it('should verify if instance Trader is being created correctly', () => {
    expect(validTrader instanceof Trader).toBeTruthy()
  })

  it('should instance Trader with valid data', () => {
    expect(validTrader.id).toBe(123)
    expect(validTrader.name).toBe('Melina')
    expect(validTrader.email).toBe('melina@email.com')
    expect(validTrader.password).toBe('1@3b4C5d')
    expect(validTrader.cpf).toBe('12234567809')
    expect(validTrader.city).toBe('Curitiba')
    expect(validTrader.neighborhood).toBe('Vila Izabel')
    expect(validTrader.cep).toBe('80620000')
    expect(validTrader.phone).toBe('991990030')
    expect(validTrader.instagram).toBe('@melina')
  })

  it('should return true if phone is valid', () => {
    const verifiedPhone = validTrader.verifyPhone()
    expect(verifiedPhone).toBeTruthy()
  })

  it('should return false if phone is invalid', () => {
    const verifiedPhone = validTrader.verifyPhone()
    expect(verifiedPhone).toBeFalsy()
  })

  it('should add an offer to array list of offers', () => {
    const offer = new Offer(123, 'product', 'manufacturing', 'cerâmica')
    validTrader.addOffer(offer)
    expect(validTrader.offers).toContain('cerâmica')
  })

  it('should remove an offer from array list of offers', () => {
    validTrader.removeOffer('cerâmica')
    expect(validTrader.offers).not.arrayContaining('cerâmica')
  })
})