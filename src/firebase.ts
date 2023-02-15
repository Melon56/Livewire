import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, set, ref, remove, onChildAdded, onChildRemoved } from "firebase/database";
const firebaseConfig = {
 apiKey: "AIzaSyAM_VmeCUH5kPzuTn0WDMOfBFBefiVwzNY",
 authDomain: "livewire-2.firebaseapp.com",
 databaseURL: "https://livewire-2-default-rtdb.firebaseio.com",
 projectId: "livewire-2",
 storageBucket: "livewire-2.appspot.com",
 messagingSenderId: "158377029094",
 appId: "1:158377029094:web:1e0bb6f942794293e9ba27",
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