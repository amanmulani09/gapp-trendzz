import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";


 const firebaseConfig = {
    apiKey: "AIzaSyClkEBRf2vsRVkxAGqtrQZUTWyGsWQOgVg",
    authDomain: "gapp-trendzz.firebaseapp.com",
    projectId: "gapp-trendzz",
    storageBucket: "gapp-trendzz.appspot.com",
    messagingSenderId: "380685247268",
    appId: "1:380685247268:web:48d1c14a26468841b0c9b1",
    measurementId: "G-3T75F9E23N"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;