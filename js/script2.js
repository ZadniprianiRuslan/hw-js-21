const friend = {
name: "Andrew",
age: 15,
hobbie: "Computer games",

countProps() {
    const friendKeys = Object.keys(this);
    const quantity = friendKeys.length;
    return quantity
    }
}

const result = friend.countProps();
console.log(result);

// function countProps(friend) {
// const friendKeys = Object.keys(friend);
// const quantity = friendKeys.length;
// return quantity
// }