const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
console.log(apartment);

apartment.owner = {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
};

// const aptRating = apartment.rating;
// // console.log(aptRating);
// const aptDescr = apartment.descr;
// // console.log(aptDescr);
// const aptPrice = apartment.price;
// // console.log(aptPrice);
// const aptTags = apartment.tags;
// // console.log(aptTags);

const ownerName = apartment.owner.name;
// console.log(ownerName);
const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
const firstTag  = apartment.tags[0];
// console.log(firstTag);
const lastTag = apartment.tags[2];
// console.log(lastTag);

const aptRating = apartment["rating"];
// console.log(aptRating);
const aptDescr = apartment["descr"];
// console.log(aptDescr);
const aptPrice = apartment["price"];
// console.log(aptPrice);
const aptTags = apartment["tags"];
// console.log(aptTags);

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};