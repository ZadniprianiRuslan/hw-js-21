const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// поверне оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// поверне форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// поверне оригінальний рядок

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// поверне форматований рядок
