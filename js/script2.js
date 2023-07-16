const friend = {
  name: "Andrew",
  age: 15,
  hobbie: "Computer games",

  countProps() {
    const friendKeys = Object.keys(this);
    const quantity = friendKeys.length;
    return quantity;
  },
};

const result = friend.countProps();
console.log(result);

const {name, age, hobbie,} = friend;
console.log(hobbie);

// const secondFriend = {
//   name: "Max",
//   age: 14,
// };

// const {name, age, hobbie: sport = "Football"} = secondFriend;

// console.log(sport);
