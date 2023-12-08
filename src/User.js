class User {
  #id;
  #name;
  #email;
  #password;
  #cpf;
  #city;
  #neighborhood;
  #cep;

  constructor(id, name, email, password, cpf, city, neighborhood, cep) {
    this.#id = id,
    this.#name = name,
    this.#email = email,
    this.#password = password,
    this.#cpf = cpf,
    this.#city = city,
    this.#neighborhood = neighborhood,
    this.#cep = cep
  }

  verifyEmail() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(this.getEmail())
  }

  verifyPassword() {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regexPassword.test(this.getPassword())
  }

  verifyCpf() {
    const regexCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    return regexCpf.test(this.getCpf())
  }

  verifyCep() {
    const regexCep =  /^\d{2}\d{3}\d{3}$/
    return regexCep.test(this.getCep())
  }

  getId() {
    return this.#id;
  }

  setId(newId) {
    this.#id = newId;
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    this.#name = newName;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    this.#email = newEmail;
  }

  getPassword() {
    return this.#password;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  getCpf() {
    return this.#cpf;
  }

  setCpf(newCpf) {
    this.#cpf = newCpf;
  }

  getCity() {
    return this.#city;
  }

  setCity(newCity) {
    this.#city = newCity;
  }

  getNeighborhood() {
    return this.#neighborhood;
  }

  setNeighborhood(newNeighborhood) {
    this.#neighborhood = newNeighborhood;
  }

  getCep() {
    return this.#cep;
  }

  setCep(newCep) {
    this.#cep = newCep;
  }
}

module.exports = User