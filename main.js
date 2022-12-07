// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { collection, getDocs} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB77tJNb56LnqtHfQMmMQwOz5kVbvXTQII",
  authDomain: "meet-cute-book-recommender.firebaseapp.com",
  projectId: "meet-cute-book-recommender",
  storageBucket: "meet-cute-book-recommender.appspot.com",
  messagingSenderId: "50878035228",
  appId: "1:50878035228:web:fd01a4f2b7f35faf2936d9",
  measurementId: "G-MM4VWRFN6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a user suggestion to the "suggestions" collection
//userInput = document.getElementById("booksuggestion").value

// Get all book titles
//const querySnapshot = await getDocs(collection(db, "books"));
//querySnapshot.forEach((doc) => {
//    console.log(doc.id, "=>", doc.data());
//});

// Get suggested book
const suggestionForm = document.querySelector('.suggestion-form');
const bookSuggestion = document.querySelector('.suggestion-input');
const suggestionSubmit = document.querySelector('.suggestion-submit')
const modal = document.querySelector('.modal-wrap')
const close = document.querySelector('.modal-close')

suggestionSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  db.collection('book-suggestions').doc().set({
    bookSuggestion: bookSuggestion.value
  }).then(() => {
    suggestionForm.reset();
    modal.classList.toggle('display-none');  
  });
});

close.addEventListener('click', () => {
  modal.classList.toggle('display-none');
})