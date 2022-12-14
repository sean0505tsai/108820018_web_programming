import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC6tn7GghhuQArWgDaefvvbmC9tow1sXQE",
	authDomain: "ntut-web-20221214-108820018.firebaseapp.com",
	projectId: "ntut-web-20221214-108820018",
	storageBucket: "ntut-web-20221214-108820018.appspot.com",
	messagingSenderId: "1048651986796",
	appId: "1:1048651986796:web:9fddbea526e7a230246549"
};

export const database = getDatabase(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);