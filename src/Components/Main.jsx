import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkAuthStatus } from '../store/Auth/index.js'
import AuthLayout from './AuthForm/AuthMain'
import './styles/index.scss'
import MenuMainLayout from './Menu/Menu.jsx'

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <MenuMainLayout />
    </div>
  )
}

export default MainLayout
