import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkAuthStatus, loginUser } from '../../store/Auth'
import AuthForm from './AuthForm/AuthForm'
import './AuthMain.scss'

const AuthLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleAuthentication = () => {
    dispatch(loginUser())
  }

  return (
    <div className="main-layout auth-page">
      {!isAuthenticated ? (
        <AuthForm onAuthenticate={handleAuthentication} />
      ) : null}
    </div>
  )
}

export default AuthLayout
