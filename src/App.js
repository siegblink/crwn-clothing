import React, { Fragment, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

export default function App() {
  const [user, setUser] = useState({})

  useEffect(function() {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async function(
      userAuth
    ) {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(function(snapShot) {
          setUser({ id: snapShot.id, ...snapShot.data() })
        })
      } else {
        setUser(userAuth)
      }
    })

    return function() {
      unsubscribeFromAuth()
    }
  }, [])

  console.log(user)
  return (
    <Fragment>
      <Header currentUser={user} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </Fragment>
  )
}
