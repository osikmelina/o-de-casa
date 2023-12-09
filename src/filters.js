const allTraders = require('./storage')
const Type = require('./Type')
const Category = require('./Category')

function filterByType(type) {
    const filteredByType = allTraders.filter((offer) => typeFinder(offer, type))
    return filteredByType
}

function typeFinder(offer, type) {
  if(type instanceof Type) {
    return offer.type === type.name
  } else {
    throw new Error('Tipo inválido')
  }
}

function filterByCategory(category) {
  const filteredByCategory = allTraders.filter((offer) => categoryFinder(offer, category))
  return filteredByCategory
}

function categoryFinder(offer, category) {
  if(category instanceof Category) {
    return offer.category === category.name
  } else {
    throw new Error('Categoria inválida')
  }
}

function filterByItem(item) {
  const filteredByItem = allTraders.filter((offer) => itemFilter(offer, item))
  return filteredByItem
}

function itemFilter(offer, item) {
  return offer.item === item
}

module.exports = {
  filterByType,
  typeFinder,
  filterByCategory,
  categoryFinder,
  filterByItem
}