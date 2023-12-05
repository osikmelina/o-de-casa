class Offer {
  #traderId;
  #type;
  #category;
  #name;

  constructor(traderId, type, category, name) {
    this.#traderId = traderId,
    this.#type = type,
    this.#name = name,
    this.#category = category
  }

  get traderId() {
    return this.#traderId;
  }

  set traderId(newTraderId) {
    this.#traderId = newTraderId;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    this.#type = newType;
  }

  get category() {
    return this.#category;
  }

  set category(newCategory) {
    this.#category = newCategory;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

module.exports = Offer