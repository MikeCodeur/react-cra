import logo from './logo.svg';
import './App.css';

import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";




// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCcf5PzC-iN0Sn8cjgvbnXmN94Bu5htaVg",
  authDomain: "schoolbooster.firebaseapp.com",
  databaseURL: "https://schoolbooster-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "schoolbooster",
  storageBucket: "schoolbooster.appspot.com",
  messagingSenderId: "286904793302",
  appId: "1:286904793302:web:ada7825124a7f095cb7177",
  measurementId: "G-40HKR48KXH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
db.collection("schools").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
