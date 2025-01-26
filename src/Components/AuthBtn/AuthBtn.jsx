// src/Components/AuthButton/AuthButtonTrigger.jsx
import React from 'react'
import { useDispatch } from 'react-redux'
import { pressButton } from '../../store/AuthBtn/btnSlice'
import './styles/index.scss'

const AuthButtonTrigger = () => {
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    dispatch(pressButton())
  }

  return (
    <div className="auth-button-trigger">
      <button className="auth-button" onClick={handleButtonClick}>
        Sign In
      </button>
    </div>
  )
}

export default AuthButtonTrigger
