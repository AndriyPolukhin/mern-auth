// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'mern-auth-53603.firebaseapp.com',
	projectId: 'mern-auth-53603',
	storageBucket: 'mern-auth-53603.appspot.com',
	messagingSenderId: '563516207924',
	appId: '1:563516207924:web:13b5b837ed4c4d6dedeb61',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
