const {
  filterByType,
  filterByCategory,
  filterByItem
} = require('./filters')

jest.mock('./index', () => [{
  traderId: 1234,
  type: 'product',
  category: 'food',
  item: 'geléia'
},
{
  traderId: 1235,
  type: 'product',
  category: 'cosmetic',
  item: 'sabonete'
},
{
  traderId: 1236,
  type: 'product',
  category: 'decor',
  item: 'vela'
},
{
  traderId: 1237,
  type: 'service',
  category: 'manufacturing',
  item: 'móveis'
},
{
  traderId: 1238,
  type: 'service',
  category: 'education',
  item: 'aula de inglês'
},
{
  traderId: 1239,
  type: 'service',
  category: 'wellness',
  item: 'wellness'
}])

describe('User class tests', () => {

  it('should filter offers by type', () => {
    const result = filterByType('product')
    expect(result).toEqual([
      {
        traderId: 1234,
        type: 'product',
        category: 'food',
        item: 'geléia'
      },
      {
        traderId: 1235,
        type: 'product',
        category: 'cosmetic',
        item: 'sabonete'
      },
      {
        traderId: 1236,
        type: 'product',
        category: 'decor',
        item: 'vela'
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
        item: 'geléia'
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
        item: 'vela'
      }
    ])
  })
})