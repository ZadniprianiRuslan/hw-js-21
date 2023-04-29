const numbers = [1, 7, 12, 25, 31, 23, 13, 9, 11, 19];
let maxNumber = 0;
for (let number of numbers) {
    if (number > maxNumber) {
        maxNumber = number;
    } else {
        continue;
    }
}
console.log(maxNumber);