import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AuthLayout from './AuthForm/AuthMain'
import MenuLayout from './Menu/MenuMain'
import { login } from '../store/authSlice.js'
import './styles/index.scss'

const MainLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const dispatch = useDispatch()

  const handleAuthentication = () => {
    dispatch(login())
  }

  return (
    <div className="app">
      {!isAuthenticated && <AuthLayout onAuthenticate={handleAuthentication} />}
      {isAuthenticated && <MenuLayout />}
    </div>
  )
}

export default MainLayout
