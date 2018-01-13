
import * as firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDElu01MI-7a-D-i2OLPH3WhqVfOOTO4to",
  authDomain: "ideal-edu.firebaseapp.com",
  databaseURL: "https://ideal-edu.firebaseio.com",
  projectId: "ideal-edu",
  storageBucket: "ideal-edu.appspot.com",
  messagingSenderId: "169398970902"
};

firebase.initializeApp(config);



// // RETRIEVE DATA
const  firestore = firebase.firestore();//
const docRef = firestore.collection("unitOneLexis");

export const loadData = () => {
  

docRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id);

    docRef.doc(doc.id).get().then( () => {
      var data = doc.data();
      console.log('Word: ', data.word, 'Def: ', data.etymology);
    })
      // console.log(`${doc.id} => ${doc.data()}`);
  });
});


}

