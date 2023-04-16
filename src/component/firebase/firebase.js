import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4lnIZ5EhGt-gfe44tN4VqalhZU99oY8k",
  authDomain: "filmyworld23-23.firebaseapp.com",
  projectId: "filmyworld23-23",
  storageBucket: "filmyworld23-23.appspot.com",
  messagingSenderId: "522991257826",
  appId: "1:522991257826:web:5c56066037630f200576bb",
  measurementId: "G-MDFBZ6M1H3"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const moviesRef = collection(db,"movies")
export default app
