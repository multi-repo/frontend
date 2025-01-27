import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../store/Auth/index.js'
import './styles/index.scss'

const AuthButtonTrigger = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleButtonClick = async () => {
    if (isAuthenticated) {
      dispatch(logoutUser())
      navigate('/')
    } else {
      navigate('/auth')
    }
  }

  return (
    <div className="auth-button-trigger">
      <button onClick={handleButtonClick} className="trigger-button">
        {isAuthenticated ? 'Logout' : 'Go to Auth'} {}
      </button>
    </div>
  )
}

export default AuthButtonTrigger
