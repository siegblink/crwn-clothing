import React, { Fragment, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions.js'

function App(props) {
  const { setCurrentUser } = props

  useEffect(
    function() {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async function(userAuth) {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(function(snapShot) {
            setCurrentUser({ id: snapShot.id, ...snapShot.data() })
          })
        } else {
          setCurrentUser(userAuth)
        }
      })
      return function() {
        unsubscribeFromAuth()
      }
    },
    [setCurrentUser]
  )

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </Fragment>
  )
}

export default connect(
  null,
  { setCurrentUser }
)(App)
