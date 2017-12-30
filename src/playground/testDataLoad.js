
const admin = require('../node_modules/firebase-admin');

// import serviceAccount from '../key/service-key';
const serviceAccount = require("../src/key/service-key.json");

// const data = require("../src/fixtures/lexisDataTest.json");
const data = require("../src/fixtures/readingDataTest.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ideal-edu.firebaseio.com"
});


data && Object.keys(data).forEach(key => {
    const nestedContent = data[key];
    
    if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach(docTitle => {

            let word = nestedContent[docTitle].word
            // console.log(nestedContent[docTitle].word);
 
            admin.firestore()
                .collection(key)
                .doc(word) // name or leave this empty lets firebase generate id
                .set(nestedContent[docTitle])
                .then((res) => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        });
    }
});



// Possible loop through of nested array


// var array = [];


// function printList(items) {
//     switch (typeof items) {
//         case "object":
//             getChildren(items);
//             break;
//         case "string":
//             array.push("<li>" + items + "</li>");
//             //console.log(items);
//             break;
//         case "array":
//             printArray(items);
//             break;
       
//     }
    
// }

// function getChildren(parent) {
//     for (var child in parent) {
//         //console.log(child);
//          array.push("<li>" + child + "<ul>");
//         printList(parent[child]);
//         array.push("</ul></li>");
//     }
// }
// function printArray(myArray){
//     for(var i = 0; i < myArray.length; i++){
//         //console.log(myArray[i]);
//          array.push("<li>" + myArray[i] + "</li>");
//         }
// }

// printList(data)
// console.log(array)

