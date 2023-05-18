const fruits = ["Apple", "Orange", "Peach", "Melon", "Cherry"];
console.log(fruits);
// 1) за допомогою методів масиву видаліть по фрукту з початку та кінця,  на їх місце додати нові фрукти;
fruits.splice(0, 1, "Strawberry");
fruits.splice(4, 1, "Cranberries");
console.log(fruits);
// 2) видалити 3-й елемент, та на його місце вставити декілька інших фруктів використовуючи метод (splice);
fruits.splice(2, 1, "Pear", "Banana");
console.log(fruits);
// 3) із зміненого масиву створіть повідомлення.