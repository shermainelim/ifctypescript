import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {Action} from "../middleware/actions";

export const userAuth = {

    Login: () => {
       const auth = getAuth();
       const provider = new GoogleAuthProvider();
       signInWithPopup(auth, provider);
    },

    Logout: () =>{
        const auth = getAuth();
        signOut(auth);
    }
}