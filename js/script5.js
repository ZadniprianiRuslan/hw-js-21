const words = ["Ruslan", "red", "book", "winter", "ball"];
const size = 5;
for (let i = 0; i < words.length; i += 1) {
    if (words[i].length < size) {
        continue;
    }
    console.log(words[i])
}