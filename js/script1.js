// Завдання 1
// Отримати загальну суму балансу (поле balance) всіх користувачів.
 
// Завдання 2
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
 
// Завдання 3
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends).
 
// Завдання 4
// Отримати масив всіх умінь всіх користувачів (поле skills), 
// при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const users = [
  { name: 'Poly', balance: 5000, friends: ['Poly', 'Mark', 'Anna'], skills: ['swimming', 'diving']},
  { name: 'Andrew', balance: 6200, friends: ['Poly', 'Anna'], skills: ['football', 'basketball']},
  { name: 'Mark', balance: 6000, friends: ['Claus', 'Andrew'], skills: ['game creator', 'game designer']},
  { name: 'Anna', balance: 5700, friends: ['Poly', 'Mark', 'Andrew'], skills: ['front-end', 'design', 'game designer']},
  { name: 'Claus', balance: 6000, friends: ['Mark', 'Claus'], skills: ['front-end', 'back-end', 'team leader']},
];

// 1
const totalBalance = users.reduce((acc, {balance}) => acc + balance, 0);
console.log(totalBalance);

// 2
// const sameFriend = users.filter((user) => user.friends.includes('Poly'));
// console.log(sameFriend);
// const usersArray = sameFriend.map((user) => user.name)
// console.log(usersArray);

// const sameFriend = users.filter(({friends}) => friends.includes('Poly')).map(({name}) => name);
// console.log(sameFriend);

const sameFriend = users.reduce((acc, {friends, name}) => {
if(friends.includes('Poly')){
acc.push(name);
}
return acc}, []);
console.log(sameFriend);

// 3
const nameByNumberOfFriends = [...users];
const sortNames = nameByNumberOfFriends.sort((prevFriends, nextFriends) => {
  return prevFriends.friends.length - nextFriends.friends.length
}).map(({name}) => name);
console.log(sortNames);

// 4
const sortBySkills = users
  .flatMap(user => user.skills)
  .filter((skill, index, array) => array.indexOf(skill) === index)
  .sort((currentSkill, nextSkill) => currentSkill.localeCompare(nextSkill));
console.log(sortBySkills);