import React, { useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default function SignIn() {
  const [state, setState] = useState({ email: '', password: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    const { email, password } = state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setState({ ...state, email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={state.email}
          required
          label='Email'
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          name='password'
          value={state.password}
          required
          label='Password'
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
