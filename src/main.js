import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4qzK787H5XuTfQ6OKgEYysuMoJCTIWqw",
    authDomain: "priverapp.firebaseapp.com",
    projectId: "priverapp",
    storageBucket: "priverapp.appspot.com",
    messagingSenderId: "248423044881",
    appId: "1:248423044881:web:782ca7a4df4be71d901eb0",
    measurementId: "G-XM198WZ20L"
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbapp);

const app = createApp(App)

app.use(router)

app.mount('#app')
