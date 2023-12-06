const User = require('./User')
const Offer = require('./Offer')

class Trader extends User {
  #phone;
  #instagram;
  static offers = [];

  constructor(id, name, email, password, cpf, city, neighborhood, zipcode, phone, instagram) {
    super(id, name, email, password, cpf, city, neighborhood, zipcode),
    this.#phone = phone,
    this.#instagram = instagram
  }

  verifyPhone() {
    const regexPhone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    return regexPhone.test(this.phone)
  }

  addOffer(offer) {
    if(offer instanceof Offer) {
      Trader.offers.push(offer)
      console.log(`${offer.name} foi adicionado`)
    }
  }

  removeOffer(item) {
    this.offers = this.offers.filter((offer) => offer.item !== item)
    // console.log(`${item} foi removido`)
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