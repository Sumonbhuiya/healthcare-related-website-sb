import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthenticatin = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthenticatin;