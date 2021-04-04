import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyAksB50xe88-GA1y7MnjBJYGydroECqvqY',
  authDomain: 'clone-5a051.firebaseapp.com',
  projectId: 'clone-5a051',
  storageBucket: 'clone-5a051.appspot.com',
  messagingSenderId: '455666161176',
  appId: '1:455666161176:web:b8bb586177ac7a6a8e956d',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
export { db, auth }
