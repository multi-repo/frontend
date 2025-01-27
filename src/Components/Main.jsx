import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkAuthStatus } from '../store/Auth/index.js'
import AuthLayout from './AuthForm/AuthMain'
import MenuLayout from './Menu/MenuMain'
import './styles/index.scss'
import AuthButtonTrigger from './AuthBtn/AuthBtn.jsx'

const MainLayout = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route path="/" element={<MenuLayout />} />
      </Routes>
      <AuthButtonTrigger />
    </div>
  )
}

export default MainLayout
