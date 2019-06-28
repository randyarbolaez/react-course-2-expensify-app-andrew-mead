// OBJECT DESTRUCTURING

// const person = {
//   age: 20,
//   location: {
//     city: 'Miami',
//     temp: 92,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}!`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`In ${city} the temperature is ${temperature} degrees.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

// -------------------------

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Miami', 'Florida', 33402];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
