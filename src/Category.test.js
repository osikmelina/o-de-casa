const Category = require('./Category')

it('should verify if instance Category is being created correctly', () => {
  const category = new Category('food')
  expect(category instanceof Category).toBeTruthy()
})