const Type = require('./Type')

it('should verify if instance Type is being created correctly', () => {
  const type = new Type('product')
  expect(type instanceof Type).toBeTruthy()
})