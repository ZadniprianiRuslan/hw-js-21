const user = {
    hobby: "",
    premium: true,
}
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);

const userKeys = Object.keys(user);
for(const key of userKeys) {
    console.log(`${key}: ${user[key]}`);
}

const user2 = { ...user };
user2.premium = true;
console.log(user2)

const { hobby, premium, mood } = user;
console.log(mood);