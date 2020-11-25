import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebase from "firebase";
import { firebaseConfig } from "./firebase/config";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
