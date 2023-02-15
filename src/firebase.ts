import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, set, ref, remove, onChildAdded, onChildRemoved } from "firebase/database";
const firebaseConfig = {
//firebase config here
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);
export const signInUser = (tempEmail:string, tempPassword:string) => {setPersistence(auth, browserSessionPersistence).then(() => {return signInWithEmailAndPassword(auth, tempEmail, tempPassword)}).catch((error) => {alert(error.message)})};
export const onAuth = (callback:any) => {onAuthStateChanged(auth, callback)};
export const setDb = (path:string, value:any) => {set(ref(db, path), value)};
export const onDb = (path:string, callback:any) => {onChildAdded(ref(db, path), callback)};
export const onDbRemoved = (path:string, callback:any) => {onChildRemoved(ref(db, path), callback)};
export const removeDb = (path:string) => {remove(ref(db, path))};
export const signOutUser = () => {signOut(auth)};
