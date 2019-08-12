import React from 'react'
import './sigin-in-and-sign-up.styles.scss'
import SignIn from '../../components/sigin-in/signin-component'
import SignUp from '../../components/sign-up/sign-up.component'

export default function SignInAndSignUpPage() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}
