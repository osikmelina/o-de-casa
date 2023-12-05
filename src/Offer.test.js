const Offer = require('./Offer')

describe('User class tests', () => {
  const offer1 = new Offer('product', 'food', 'geléia')
  const offer2 = new Offer('product', 'cosmetic', 'sabonete')
  const offer3 = new Offer('product', 'decor', 'vela')
  const offer4 = new Offer('service', 'manufacturing', 'móveis')
  const offer5 = new Offer('service', 'education', 'aula de inglês')
  const offer6 = new Offer('service', 'wellness', 'massagem')

  const offers = [offer1, offer2, offer3, offer4, offer5, offer6]
  const test = [{

  },
{}]

  it('should filter offers by type', () => {
    const result = offers.filterByType('product')
    expect(result).toEqual([offer1, offer2, offer3])
  })

  it('should filter offers by category', () => {
    const result = offers.filterByCategory('food')
    expect(result).toEqual([offer1])
  })

  it('should filter offers by item', () => {
    const result = offers.filterByItem('vela')
    expect(result).toEqual(offer3)
  })
})