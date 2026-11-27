import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFRBURmMOHhVOjcm3zNep1ZOEcdfueoDQ",
  authDomain: "dibinca.firebaseapp.com",
  databaseURL: "https://dibinca-default-rtdb.firebaseio.com",
  projectId: "dibinca",
  storageBucket: "dibinca.firebasestorage.app",
  messagingSenderId: "644975772776",
  appId: "1:644975772776:web:5152b29aed7b3a740967dd",
  measurementId: "G-F4FPWPPDZ1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
