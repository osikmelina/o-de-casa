const User = require('./User')
const Offer = require('./Offer')

class Trader extends User {
  #phone;
  #instagram;
  offers = [];

  constructor(id, name, email, password, cpf, city, neighborhood, cep, phone, instagram) {
    super(id, name, email, password, cpf, city, neighborhood, cep),
    this.#phone = phone,
    this.#instagram = instagram
  }

  verifyPhone() {
    const regexPhone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    return regexPhone.test(this.getPhone())
  }

  addOffer(offer) {
    if(offer instanceof Offer) {
      this.offers.push(offer)
      console.log(`${offer.getItem()} foi adicionado`)
    }
  }

  removeOffer(item) {
     const arrayOfItems = this.offers.map((offer) => offer.getItem())
     const indexItem = arrayOfItems.indexOf(item)
    if(indexItem >= 0) {
      this.offers.splice(indexItem, 1)
      console.log(`${item} foi removido`)
    }
  }

  getPhone() {
    return this.#phone;
  }

  setPhone(newPhone) {
    this.#phone = newPhone
  }

  getInstagram() {
    return this.#instagram
  }

  setInstagram(newInstagram) {
    this.#instagram = newInstagram
  }
}

module.exports = Trader