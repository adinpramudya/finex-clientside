// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZhH_h_eoHDGGclT-BfG4NKl7ajRjRDT4',
  authDomain: 'finex-25bde.firebaseapp.com',
  projectId: 'finex-25bde',
  storageBucket: 'finex-25bde.appspot.com',
  messagingSenderId: '562725061811',
  appId: '1:562725061811:web:654667d92192ddccc59cc6',
  measurementId: 'G-NKG30ZQDBK'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const auth = getAuth()
export { auth }
