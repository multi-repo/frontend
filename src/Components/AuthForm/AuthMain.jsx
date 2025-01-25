// src/Components/AuthForm/AuthMain.jsx
import React, { useState } from 'react'
import AuthForm from './AuthForm/AuthForm'
import './AuthMain.scss'

const AuthLayout = ({ onAuthenticate }) => {
  const [isAuthPage, setIsAuthPage] = useState(true)

  const handleAuthentication = () => {
    setIsAuthPage(false)
    onAuthenticate()
  }

  return (
    <div className="main-layout auth-page">
      {isAuthPage ? <AuthForm onAuthenticate={handleAuthentication} /> : null}
    </div>
  )
}

export default AuthLayout
