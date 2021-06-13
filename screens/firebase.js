import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBq52poHD4dnkxkygDF92t5o1A4boaJ1kU",
    authDomain: "signalclone-68e08.firebaseapp.com",
    projectId: "signalclone-68e08",
    storageBucket: "signalclone-68e08.appspot.com",
    messagingSenderId: "325652165039",
    appId: "1:325652165039:web:27cc523dcc0bcacbbe3f5a"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth }

