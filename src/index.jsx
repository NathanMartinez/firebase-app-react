import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.min.css";
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
