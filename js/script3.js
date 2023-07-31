// Завдання 1
// Отримати масив імен всіх користувачів (поле name).
 
// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
 
// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).
 
// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).
 
// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const users = [
    { gender: 'male', name: 'Max', eyeColor: 'blue', isActive: false, email: 'max1@gmail.com', age: 13},
    { gender: 'female', name: 'Poly', eyeColor: 'green', isActive: true, email: 'poly22@gmail.com', age: 19},
    { gender: 'female', name: 'Kiwi', eyeColor: 'brown', isActive: true, email: 'kiwi3h@gmail.com', age: 16},
    { gender: 'male', name: 'Vlad', eyeColor: 'yellow', isActive: false, email: 'vlad67@gmail.com', age: 20},
    { gender: 'male', name: 'Stepan', eyeColor: 'blue', isActive: true, email: 'stepan53t@gmail.com', age: 23},
  ];
// 1
const userName = users.map((user) => user.name);
console.log(userName);

// 2
const userEyeColor = users.filter(({eyeColor}) => eyeColor === 'blue');
console.log(userEyeColor)

// 3
// const userGender = users.filter((user) => user.gender === 'female');
// console.log(userGender);

// const userNames = userGender.map(user => user.name);
// console.log(userNames);
const nameByGender = users.filter((user) => user.gender === 'female').map(user => user.name);
console.log(nameByGender);

// 4
const isUserActive = users.filter(({isActive}) => !isActive);
console.log(isUserActive);

// 5
const userEmail = users.find(({email}) => email === 'vlad67@gmail.com');
console.log(userEmail);

// 6
const userAge = users.filter((user) => user.age > 18 && user.age < 21);
console.log(userAge);