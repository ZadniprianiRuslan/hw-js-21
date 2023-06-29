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