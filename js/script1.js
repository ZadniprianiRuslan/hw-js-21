const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function (newLogin, newEmail) {
  this.login = newLogin;
  this.email = newEmail;
  return `Login: ${this.login}, Email: ${this.email}`;
}; // function
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
console.log(mango.getInfo(mango.login, mango.email)); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
console.log(poly.getInfo(poly.login, poly.email)); // Login: Poly, Email: poly@mail.com
