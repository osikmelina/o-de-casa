class User {
  #id;
  #name;
  #email;
  #password;
  #cpf;
  #city;
  #neighborhood;
  #zipcode;

  constructor(id, name, email, password, cpf, city, neighborhood, zipcode) {
    this.#id = id,
    this.#name = name,
    this.#email = email,
    this.#password = password,
    this.#cpf = cpf,
    this.#city = city,
    this.#neighborhood = neighborhood,
    this.#zipcode = zipcode
  }

  verifyEmail() {

  }

  verifyPassword(password) {

  }

  verifyCpf(cpf) {

  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#name = newId;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get email() {
    return this.#email;
  }

  set name(newEmail) {
    this.#name = newEmail;
  }

  get password() {
    return this.#password;
  }

  set name(newPassword) {
    this.#name = newPassword;
  }

  get cpf() {
    return this.#cpf;
  }

  set name(newCpf) {
    this.#name = newCpf;
  }

  get city() {
    return this.#city;
  }

  set city(newCity) {
    this.#city = newCity;
  }

  get neighborhood() {
    return this.#neighborhood;
  }

  set neighborhood(newNeighborhood) {
    this.#neighborhood = newNeighborhood;
  }

  get zipcode() {
    return this.#zipcode;
  }

  set name(newZipcode) {
    this.#name = newZipcode;
  }
}

module.exports = User