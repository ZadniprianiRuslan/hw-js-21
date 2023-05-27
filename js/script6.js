let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");
  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }
  numbers.push(input);
}

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
