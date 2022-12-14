import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC6tn7GghhuQArWgDaefvvbmC9tow1sXQE",
	authDomain: "ntut-web-20221214-108820018.firebaseapp.com",
	databaseURL: "https://ntut-web-20221214-108820018-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "ntut-web-20221214-108820018",
	storageBucket: "ntut-web-20221214-108820018.appspot.com",
	messagingSenderId: "1048651986796",
	appId: "1:1048651986796:web:9fddbea526e7a230246549"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);