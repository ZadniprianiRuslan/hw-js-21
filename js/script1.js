const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const itemNumber = i + 1;
    console.log(`${itemNumber} - ${item}`);
  }
  return
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
