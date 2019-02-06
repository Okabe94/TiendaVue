import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAqWRiCxJW1OZ-KiAEVsjrNPTPdV2JxoRQ",
    authDomain: "tienda-vuejs.firebaseapp.com",
    databaseURL: "https://tienda-vuejs.firebaseio.com",
    projectId: "tienda-vuejs",
    storageBucket: "",
    messagingSenderId: "92738365055"
});

export const db = app.database();
export const namesRef = db.ref('names');