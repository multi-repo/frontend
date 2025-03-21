import React from 'react'
import './styles/index.scss'
import { useAuthButtonHandler } from '@/src/hooks/auth/auth-button-handler.jsx'
const AuthButtonTrigger = () => {
  const { isAuthenticated, handleButtonClick } = useAuthButtonHandler()
  const buttonText = isAuthenticated ? 'Logout' : 'Go to Auth'

  return (
    <div className="auth-button-trigger">
      <button
        onClick={handleButtonClick}
        className="auth-button-trigger__auth-button"
      >
        {buttonText}
      </button>
    </div>
  )
}

export default AuthButtonTrigger
