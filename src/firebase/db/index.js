import firebase from 'firebase'

// DB
var db = firebase.firestore();

// Add a second document with a generated ID.

function addToDb(table, data)
db.collection(table)
  .add(data)
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });

function getDBData(table) {
  db.collection(table)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
}