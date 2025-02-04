import React from 'react'
import './styles/index.scss'
import { useAuthButtonHandler } from '../../../hooks/auth/auth-button-handler.jsx'

const AuthButtonTrigger = () => {
  const { isAuthenticated, handleButtonClick } = useAuthButtonHandler()

  return (
    <div className="auth-button-trigger">
      <button
        onClick={handleButtonClick}
        className="auth-button-trigger__auth-button"
      >
        {isAuthenticated ? 'Logout' : 'Go to Auth'}
      </button>
    </div>
  )
}

export default AuthButtonTrigger
