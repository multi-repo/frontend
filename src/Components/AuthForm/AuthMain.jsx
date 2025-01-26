// src/Components/AuthForm/AuthMain.jsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkAuthStatus, loginUser } from '../../store/Auth' // Corrected the import path
import AuthForm from './AuthForm/AuthForm'
import './AuthMain.scss'

const AuthLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  const handleAuthentication = () => {
    dispatch(loginUser()) // Using the loginUser action instead of login
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
