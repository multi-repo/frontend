// src/Components/Menu/MenuMain.jsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkAuthStatus } from '../../../store/Auth/index.js'
import AuthLayout from '../../AuthForm/AuthMain'
import AuthButtonTrigger from '../AuthBtn/AuthBtn.jsx'
import './MenuMain.scss'
import MenuList from './Menu.jsx'

const MenuLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  return (
    <div className="MenuLayout">
      <MenuList />
      <AuthButtonTrigger />
    </div>
  )
}

export default MenuLayout
