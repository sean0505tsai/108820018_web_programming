// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX-Btj16YZj-lZPxa4fiKa9txNp9aZ-y4",
  authDomain: "ntut-web-react-lab-04.firebaseapp.com",
  databaseURL: "https://ntut-web-react-lab-04-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-react-lab-04",
  storageBucket: "ntut-web-react-lab-04.appspot.com",
  messagingSenderId: "37226046214",
  appId: "1:37226046214:web:e6a22affd588205ab6b487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);