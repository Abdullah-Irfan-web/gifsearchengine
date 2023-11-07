import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

    apiKey: "AIzaSyCWkFzFlJ7CF-WVrH4jIV3dSptbg38Y5lE",
  
    authDomain: "gif-authentication.firebaseapp.com",
  
    projectId: "gif-authentication",
  
    storageBucket: "gif-authentication.appspot.com",
  
    messagingSenderId: "386040864400",
  
    appId: "1:386040864400:web:0185f8e1072a490e328215",
  
    measurementId: "G-EZ1JD2784F"
  
  };
const app=initializeApp(firebaseConfig);  
export const auth=getAuth(app);