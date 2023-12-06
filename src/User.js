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
    return regexEmail.test(this.email)
  }

  verifyPassword() {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regexPassword.test(this.password)
  }

  verifyCpf() {
    const regexCpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    return regexCpf.test(this.cpf)
  }

  verifyCep() {
    const regexCep =  /^\d{2}\d{3}\d{3}$/
    return regexCep.test(this.cep)
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

  set email(newEmail) {
    this.#email = newEmail;
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(newCpf) {
    this.#cpf = newCpf;
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

  get cep() {
    return this.#cep;
  }

  set cep(newCep) {
    this.#cep = newCep;
  }
}

module.exports = User