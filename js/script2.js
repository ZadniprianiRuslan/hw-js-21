// У вас є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id.
// Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, 
// де fullName – складається з name та surname.

const people = [
  { name: 'John',  surname: 'Doe',  age: 32, occupation: 'programmer' },
  { name: 'Jane', surname: 'Lee',  age: 26, occupation: 'teacher' },
  { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
  { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' },
]

const people2 = people.map((person, index) => ({
  id: index + 1,
  fullName: person.name + " " + person.surname,
}));

console.log(people2);