// const firebase = require("firebase");

import * as firebase from 'firebase';
import 'firebase/firestore';
// import firestore from 'firestore';
// Required for side-effects
// require("firebase/firestore");
// // * as takes all named exports from firebase and dumps them to firebase that can be reference with dot syntax


var config = {
  apiKey: "AIzaSyDElu01MI-7a-D-i2OLPH3WhqVfOOTO4to",
  authDomain: "ideal-edu.firebaseapp.com",
  databaseURL: "https://ideal-edu.firebaseio.com",
  projectId: "ideal-edu",
  storageBucket: "ideal-edu.appspot.com",
  messagingSenderId: "169398970902"
};

firebase.initializeApp(config);



// RETRIEVE DATA
const  firestore = firebase.firestore();//
const docRef = firestore.collection("unitOneLexis");


docRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // console.log(doc.id);

    docRef.doc(doc.id).get().then( () => {
      // var data = doc.data();
      // console.log('Word: ', data.word, 'Def: ', data.def);
    })
      // console.log(`${doc.id} => ${doc.data()}`);
  });
});



// load dummy data

// var citiesRef = firestore.collection("cities");

// citiesRef.doc("SF").set({
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000 });
// citiesRef.doc("LA").set({
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000 });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000 });
// citiesRef.doc("TOK").set({
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000 });
// citiesRef.doc("BJ").set({
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000 });



// generated ID

// firestore.collection("cities").add({
//   name: "Tokyo",
//   country: "Japan"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });