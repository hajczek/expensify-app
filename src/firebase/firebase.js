import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_remove

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_change
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Note 1', 
//   amount: 109500, 
//   createdAt: 2000
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: 'Note 2', 
//   amount: 5900, 
//   createdAt: 1000
// });
  
// database.ref('expenses').push({
//   description: 'Food',
//   note: 'Note 3', 
//   amount: 10300, 
//   createdAt: 2500
// });

// Update record on data by id
// database.ref('notes/-LWHIM5FKPLeI3yTRl6M').update({
//   body: 'Buy food'
// });

// Remove item from data by id
// database.ref('notes/LWHIM5FKPLeI3yTRl6M').remove();

// database.ref('notes').push({
//   title: 'Course topis',
//   body: 'Angular'
// });

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// Fetching data from firebase
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch(() => {
//     console.log('Error fetching data', e);
//   })

// Fetching data with on() method
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('age').set(35);
// }, 7000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// Set data in firebase
// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Softwer developer',
//     company:  'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('This filed.', e);
// });

// database.ref('attributes').set({
//   height: 187, 
//   weight: 78
// }).then(() => {
//   console.log('My data is saved!')
// }).catch((e) => {
//   console.log('This filed!!!!!!!!!!!!!.', e);
// });

// Updating data

// Remove data by set null
// database.ref('isSingle').set(null);

// Remove data by use remove method
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('All data was remove');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });