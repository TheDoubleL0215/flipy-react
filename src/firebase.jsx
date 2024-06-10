import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpOyFgQFrVNjmz-QHj8XaMPAzkG-sTrbE",
  authDomain: "flipy-development.firebaseapp.com",
  projectId: "flipy-development",
  storageBucket: "flipy-development.appspot.com",
  messagingSenderId: "33818562800",
  appId: "1:33818562800:web:2ac162e0362f7efe427235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
