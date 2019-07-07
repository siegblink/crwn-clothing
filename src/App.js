import React, { Fragment, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sigin-in-and-sign-up/sigin-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

export default function App() {
  const [user, setUser] = useState({})

  useEffect(function() {
    const unsubscribeFromAuth = auth.onAuthStateChanged(function(user) {
      setUser(user)
      console.log(user)
    })

    return function() {
      unsubscribeFromAuth()
    }
  }, [])

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
