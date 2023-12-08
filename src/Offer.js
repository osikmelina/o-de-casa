class Offer {
  #traderId;
  #type;
  #category;
  item;

  constructor(traderId, type, category, item) {
    this.#traderId = traderId,
    this.#type = type,
    this.#category = category,
    this.item = item
  }

  getTraderId() {
    return this.#traderId;
  }

  setTraderId(newTraderId) {
    this.#traderId = newTraderId;
  }

  getType() {
    return this.#type;
  }

  setType(newType) {
    this.#type = newType;
  }

  getCategory() {
    return this.#category;
  }

  setCategory(newCategory) {
    this.#category = newCategory;
  }

  getItem() {
    return this.item;
  }

  setItem(newItem) {
    this.item = newItem;
  }
}

module.exports = Offer