import React, { useState } from 'react'
import AuthLayout from './AuthForm/AuthMain'
import MenuLayout from './Menu/MenuMain'
import './styles/index.scss'

const MainLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuthentication = () => {
    setIsAuthenticated(true)
  }

  return (
    <div className="app">
      {!isAuthenticated && <AuthLayout onAuthenticate={handleAuthentication} />}
      <MenuLayout />
    </div>
  )
}

export default MainLayout
