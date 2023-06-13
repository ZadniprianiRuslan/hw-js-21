// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Change code below this line

// function makeMessage(pizzaName, callback) {
//     console.log(makePizza(pizzaName));
//       return callback(pizzaName);

// }

// makeMessage("Royal Grand", makePizza);

const deliverPizza = (pizzaName) => {
  return `Delivering ${pizzaName} pizza.`;
};

const makePizza = (pizzaName) => {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
};

// Change code below this line

const makeMessage = (pizzaName, callback) => {
  return callback(pizzaName);
};

const result = makeMessage("Royal Grand", makePizza);
console.log(result);