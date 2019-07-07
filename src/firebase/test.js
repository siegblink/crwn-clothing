import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore
  .collection('users')
  .doc('hrd2ylZ95Xqzbhw0ZKM8')
  .collection('cartItems')
  .doc('vwpNjwBCBDMSf42PSTOx')

firestore.doc('/users/hrd2ylZ95Xqzbhw0ZKM8/cartItems/vwpNjwBCBDMSf42PSTOx')

firestore.collection('/users/hrd2ylZ95Xqzbhw0ZKM8/cartItems')
