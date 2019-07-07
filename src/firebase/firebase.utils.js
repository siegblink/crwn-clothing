import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCJVw_SriTRifr8iWx28qIeme5S0pUWLPk',
  authDomain: 'crwn-db-c7613.firebaseapp.com',
  databaseURL: 'https://crwn-db-c7613.firebaseio.com',
  projectId: 'crwn-db-c7613',
  storageBucket: '',
  messagingSenderId: '142269347198',
  appId: '1:142269347198:web:6603464a79113a57',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export function signInWithGoogle() {
  auth.signInWithPopup(provider)
}

export default firebase
