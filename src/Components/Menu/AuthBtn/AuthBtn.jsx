import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../../store/Auth/index.js'
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
