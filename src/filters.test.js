const {
  filterByType,
  filterByCategory,
  filterByItem
} = require('./filters')

jest.mock('./index', () => [{
  traderId: 1234,
  type: 'product',
  category: 'food',
  name: 'geléia'
},
{
  traderId: 1235,
  type: 'product',
  category: 'cosmetic',
  name: 'sabonete'
},
{
  traderId: 1236,
  type: 'product',
  category: 'decor',
  name: 'vela'
},
{
  traderId: 1237,
  type: 'service',
  category: 'manufacturing',
  name: 'móveis'
},
{
  traderId: 1238,
  type: 'service',
  category: 'education',
  name: 'aula de inglês'
},
{
  traderId: 1239,
  type: 'service',
  category: 'wellness',
  name: 'wellness'
}])

describe('User class tests', () => {

  it('should filter offers by type', () => {
    const result = filterByType('product')
    expect(result).toEqual([
      {
        traderId: 1234,
        type: 'product',
        category: 'food',
        name: 'geléia'
      },
      {
        traderId: 1235,
        type: 'product',
        category: 'cosmetic',
        name: 'sabonete'
      },
      {
        traderId: 1236,
        type: 'product',
        category: 'decor',
        name: 'vela'
      }
    ])
  })

  it('should filter offers by category', () => {
    const result = filterByCategory('food')
    expect(result).toEqual([
      {
        traderId: 1234,
        type: 'product',
        category: 'food',
        name: 'geléia'
      }
    ])
  })

  it('should filter offers by item', () => {
    const result = filterByItem('vela')
    expect(result).toEqual([
      {
        traderId: 1236,
        type: 'product',
        category: 'decor',
        name: 'vela'
      }
    ])
  })
})