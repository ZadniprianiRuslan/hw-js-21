const User = function ({ name, age, followers }) {
  this.name = name;
  this.age = age;
  this.followers = followers;
};
User.prototype.getInfo = function (newName, newAge, newFollowers) {
  this.name = newName;
  this.age = newAge;
  this.followers = newFollowers;
  return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
};
const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
console.log(mango.getInfo(mango.name, mango.age, mango.followers)); // User Mango is 2 years old and has 20 followers
const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
console.log(mango.getInfo(poly.name, poly.age, poly.followers)); // User Poly is 3 years old and has 17 followers
