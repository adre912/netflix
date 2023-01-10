
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVt-fDlBFDiWqgXasrH_kWW-r8miM2BAw",
  authDomain: "react-netflix-clone-365eb.firebaseapp.com",
  projectId: "react-netflix-clone-365eb",
  storageBucket: "react-netflix-clone-365eb.appspot.com",
  messagingSenderId: "842317016525",
  appId: "1:842317016525:web:58daa2303b015fc3dd6884",
  measurementId: "G-N74RY079Z8"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);