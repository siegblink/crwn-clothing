import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from './crown.svg'
import './header.styles.scss'

function Header({ currentUser }) {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.user.currentUser,
  }
}

export default connect(mapStateToProps)(Header)
