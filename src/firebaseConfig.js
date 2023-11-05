// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6oA8VtVa-YK34o_JtjB_Ixb7Bu4vLVtc',
  authDomain: 'finex-7511d.firebaseapp.com',
  projectId: 'finex-7511d',
  storageBucket: 'finex-7511d.appspot.com',
  messagingSenderId: '491765542885',
  appId: '1:491765542885:web:dc950bccd35859a0f6490c',
  measurementId: 'G-RJN4VMWRBT'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const auth = getAuth()
export { auth }
