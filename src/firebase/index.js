import firebase from 'firebase'

// DB
var db = firebase.firestore();

// Add a second document with a generated ID.
db.collection("users")
  .add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912,
  })
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });

db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });