import React, { useState } from 'react'
import AuthLayout from './AuthForm/AuthMain'

const MainLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuthentication = () => {
    setIsAuthenticated(true)
  }

  return (
    <div className="app">
      {!isAuthenticated && <AuthLayout onAuthenticate={handleAuthentication} />}
    </div>
  )
}

export default MainLayout
