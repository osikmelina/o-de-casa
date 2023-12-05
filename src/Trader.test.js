const Trader = require('./Trader')

describe('Trader class tests', () => {

  let trader
  beforeEach(() => {
    trader = new Trader(123, 'Melina', 'melina@email.com', '123456', '12234567809', 'Curitiba', 'Vila Izabel', '80620000', '991990030', '@melina', 'ceramica')
  })

  it('should verify if phone is valid', () => {
    const verifiedPhone = trader.verifyPhone()
    expect(verifiedPhone).toBeTruthy()
  })

  it('should add an item to array list of items', () => {
    expect(trader.item).toContain('cerâmica')
  })

  it('should remove an item to array list of items', () => {
    expect(trader.item).not.arrayContaining('cerâmica')
  })
})