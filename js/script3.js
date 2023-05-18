const styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles.splice(1, 1, "Класика");
console.log(styles);

const deletedStyle = styles.splice(0, 1);
console.log(deletedStyle);

styles.splice(0, 0, "Реп", "Реггі");
console.log(styles);