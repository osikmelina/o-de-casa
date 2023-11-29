const User = require('./User')

class Trader extends User {
  #phone;
  instagram;
  offerType = [category];

  constructor(phone, instagram) {
    this.#phone = phone,
    this.instagram = instagram
  }

  get phone() {
    return this.#phone;
  }

  set phone(newPhone) {
    this.#phone = newPhone;
  }

  addOffer(category) {

  }

  removeOffer(category) {
    
  }
}