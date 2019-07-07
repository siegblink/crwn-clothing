import React, { useState } from 'react'
import './signin-styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

export default function SigIn() {
  const [state, setState] = useState({ email: '', password: '' })

  function handleSubmit(event) {
    event.preventDefault()
    setState({ ...state, email: '', password: '' })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='sign-in title'>
      <h2 className=''>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={state.email}
          required
          label='email'
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          name='password'
          value={state.password}
          required
          label='password'
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
