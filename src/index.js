const allTraders = require('./storage')
const Trader = require('./Trader')
const Offer = require('./Offer')
const Type = require('./Type')
const Category = require('./Category')
const {
  filterByType,
  filterByCategory,
  filterByItem
} = require('./filters')

const trader1 = new Trader(123, 'Melina', 'melina@email.com', '1@3b4C5d', '12234567809', 'Curitiba', 'Vila Izabel', '80620000', '991990030', '@melina')
const trader2 = new Trader(124, 'Maria', 'maria@email.com', '1@3b4C5d', '12234567808', 'Curitiba', 'Santa Quitéria', '80610000', '991990060', '@maria')

const productOffer1 = new Offer(123, 'product', 'decor', 'vela')
const productOffer2 = new Offer(123, 'product', 'manufacturing', 'cerâmica')
const productOffer3 = new Offer(124, 'product', 'decor', 'cestaria')
const serviceOffer1 = new Offer(123, 'service', 'education', 'aula de inglês')
const serviceOffer2 = new Offer(124, 'service', 'repair', 'eletricista')
const type = new Type('service')
const category = new Category('decor')

trader1.addOffer(productOffer1)
trader1.addOffer(productOffer2)
trader1.addOffer(serviceOffer1)
trader2.addOffer(productOffer3)
trader2.addOffer(serviceOffer2)
console.log(allTraders)
trader1.removeOffer(productOffer2)
console.log(allTraders)

const typeFilter = filterByType(type)
console.log(typeFilter)
const categoryFilter = filterByCategory(category)
console.log(categoryFilter)
const itemFilter = filterByItem('vela')
console.log(itemFilter)