const User = require('./User')

class Trader extends User {
  #phone;
  #instagram;
  static offers = [];

  constructor(id, name, email, password, cpf, city, neighborhood, zipcode, phone, instagram) {
    super(id, name, email, password, cpf, city, neighborhood, zipcode),
    this.#phone = phone,
    this.#instagram = instagram
  }

  verifyPhone(phone) {

  }

  addOffer(offer) {

  }

  removeOffer(offer) {
    
  }

  get phone() {
    return this.#phone;
  }

  set phone(newPhone) {
    this.#phone = newPhone;
  }

  get instagram() {
    return this.#instagram;
  }

  set phone(newInstagram) {
    this.#phone = newInstagram;
  }
}

module.exports = Trader