const Offer = require('./Offer')

describe('User class tests', () => {

  beforeEach(() => {
    validOffer = new Offer(123, 'service', 'wellness', 'massagem')
  })

  it('should get traderId', () => {
    const result = validOffer.getTraderId()
    expect(result).toEqual(123)
  })

  it('should set new traderId', () => {
    validOffer.setTraderId(234)
    expect(validOffer.getTraderId()).toEqual(234)
  })

  it('should get Offer type', () => {
    const result = validOffer.getType()
    expect(result).toEqual('service')
  })

  it('should set new Offer type', () => {
    validOffer.setType('product')
    expect(validOffer.getType()).toEqual('product')
  })

  it('should get Offer category', () => {
    const result = validOffer.getCategory()
    expect(result).toEqual('wellness')
  })

  it('should set new Offer category', () => {
    validOffer.setCategory('decor')
    expect(validOffer.getCategory()).toEqual('decor')
  })

  it('should get Offer item', () => {
    const result = validOffer.getItem()
    expect(result).toEqual('massagem')
  })

  it('should set new Offer item', () => {
    validOffer.setItem('vela')
    expect(validOffer.getItem()).toEqual('vela')
  })
})