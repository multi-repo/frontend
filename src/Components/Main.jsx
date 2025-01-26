import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkAuthStatus, loginUser } from '../store/Auth/index.js'
import AuthLayout from './AuthForm/AuthMain'
import MenuLayout from './Menu/MenuMain'
import './styles/index.scss'

const MainLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  const handleAuthentication = () => {
    dispatch(loginUser())
  }

  return (
    <div className="app">
      {!isAuthenticated && <AuthLayout onAuthenticate={handleAuthentication} />}
      {isAuthenticated && <MenuLayout />}
    </div>
  )
}

export default MainLayout
