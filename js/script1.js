const user = {
    hobby: "",
    premium: true,
}
console.table(user);
user.mood = "happy";
console.table(user);
user.hobby = "skydiving";
user.premium = false;
console.log(user);

const userKeys = Object.keys(user);
for(const key of userKeys) {
    console.log(`${key}: ${user[key]}`);
}