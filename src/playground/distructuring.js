// OBJECT DISTRUCTURING

const person = {
  name: 'Mia',
  age: 44,
  location: {
    city: 'Milanowek',
    temp: 0
  }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}.`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); // Pinguin, Self-Published

// ARRAY DISTRUCTURING

const address = ['1299 s Juniper Street', 'Philadelphia', , '19147'];

// const [street, town, state, zip] = address;
const [, town, state = 'New York'] = address;

console.log(`You are in ${town}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} cost ${medium}.`);