// Напишіть функцію, яка отримує масив рядків і повертає новий масив, 
// в якому кожен з рядків складається з першої та останньої букви відповідної строки вхідного масиву.

const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

const newArray = array2.map(word => word.slice(0,1));
console.log(newArray);

const newArray2 = array2.map(word2 => word2.slice(word2.length - 1));
console.log(newArray2);

const resultArray = [newArray + newArray2];
console.log(resultArray);