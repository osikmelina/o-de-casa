const {
  filterByType,
  typeFinder,
  filterByCategory,
  categoryFinder,
  filterByItem
} = require('./filters')

const Type = require('./Type')
const Category = require('./Category')
const Offer = require('./Offer')

jest.mock('./storage', () => [{
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
    const type = new Type('product')
    const result = filterByType(type)
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

  it('should match offer type with type name', () => {
    const offer = new Offer(123, 'service', 'wellness', 'massagem')
    const type = new Type('service')
    expect(typeFinder(offer, type)).toEqual(offer.type === type.name)
  })

  it('should throw error message if using type finder with an invalid type', () => {
    expect(() => typeFinder(Category)).toThrow('Tipo inválido')
  })

  it('should filter offers by category', () => {
    const category = new Category('food')
    const result = filterByCategory(category)
    expect(result).toEqual([
      {
        traderId: 1234,
        type: 'product',
        category: 'food',
        item: 'geléia'
      }
    ])
  })

  it('should match offer category with category name', () => {
    const offer = new Offer(123, 'service', 'wellness', 'massagem')
    const category = new Category('wellness')
    expect(categoryFinder(offer, category)).toEqual(offer.category === category.name)
  })

  it('should throw error message if using category finder with an invalid category', () => {
    expect(() => categoryFinder(Type)).toThrow('Categoria inválida')
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