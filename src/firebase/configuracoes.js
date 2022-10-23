
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-et1NxDPPhz6To2h-g3hZ99onbzzj_RI",
  authDomain: "projetodevhouse.firebaseapp.com",
  projectId: "projetodevhouse",
  storageBucket: "projetodevhouse.appspot.com",
  messagingSenderId: "937476885540",
  appId: "1:937476885540:web:2d918de7320f91b25e1cb1"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};