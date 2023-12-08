const allTraders = require('./index')

function filterByType(type) {
  const filteredByType = allTraders.filter((offer) => typeFilter(offer, type))
  return filteredByType
}

function typeFilter(offer, type) {
  return offer.type === type
}

function filterByCategory(category) {
  const filteredByCategory = allTraders.filter((offer) => categoryFilter(offer, category))
  return filteredByCategory
}

function categoryFilter(offer, category) {
  return offer.category === category
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
  filterByCategory,
  filterByItem
}