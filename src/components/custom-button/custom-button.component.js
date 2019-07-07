import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sigin-in' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
