const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// Firebase configuration (Replace with your Firebase project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyAYpylwszT_gLxy-4zJzMgBT0cZsxF-MKI",
    authDomain: "celestial-stiches-9e60c.firebaseapp.com",
    projectId: "celestial-stiches-9e60c",
    storageBucket: "celestial-stiches-9e60c.firebasestorage.app",
    messagingSenderId: "47777900025",
    appId: "1:47777900025:web:fd6e4ab59683c15cd50928",
    measurementId: "G-33NCSJSSRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get Elements


// Toggle Forms
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Handle Sign-Up
document.querySelector('.sign-up-container form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input[placeholder="Name"]').value;
    const email = e.target.querySelector('input[placeholder="Email"]').value;
    const password = e.target.querySelector('input[placeholder="Password"]').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created! Please Sign In.");
        container.classList.remove('right-panel-active'); // Switch to sign-in panel
    } catch (error) {
        alert(error.message);
    }
});

// Handle Sign-In
document.querySelector('.sign-in-container form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[placeholder="Email"]').value;
    const password = e.target.querySelector('input[placeholder="Password"]').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect after login
    } catch (error) {
        alert(error.message);
    }
});
firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in, hide the Login link and show the My Account link
      document.getElementById('login-link').style.display = 'none';
      document.getElementById('my-account-link').style.display = 'block';
    } else {
      // User is not logged in, show the Login link and hide the My Account link
      document.getElementById('login-link').style.display = 'block';
      document.getElementById('my-account-link').style.display = 'none';
    }
  });
