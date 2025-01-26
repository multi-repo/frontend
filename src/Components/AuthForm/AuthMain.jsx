// src/Components/AuthForm/AuthMain.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/authSlice.js'
import AuthForm from './AuthForm/AuthForm'
import './AuthMain.scss'

const AuthLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const handleAuthentication = () => {
    dispatch(login())
  }

  return (
    <div className="main-layout auth-page">
      {!isAuthenticated ? (
        <AuthForm onAuthenticate={handleAuthentication} />
      ) : (
        <p>Welcome! You are logged in.</p>
      )}
    </div>
  )
}

export default AuthLayout
