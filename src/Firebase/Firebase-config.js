// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaHsuvs6B5HXTmfxTyO1_eCFQElzasyR0",
    authDomain: "college-quest-hub.firebaseapp.com",
    projectId: "college-quest-hub",
    storageBucket: "college-quest-hub.appspot.com",
    messagingSenderId: "120065840717",
    appId: "1:120065840717:web:851d950973ea11049dae04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app