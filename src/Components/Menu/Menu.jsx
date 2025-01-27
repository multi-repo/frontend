import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkAuthStatus } from '../../store/Auth'
import AuthLayout from '../AuthForm/AuthMain'
import MenuLayout from './MenuMain'
import AuthButtonTrigger from '../AuthBtn/AuthBtn'

const MenuMainLayout = () => {
  return (
    <div className="MenuMainLayout">
      <MenuLayout />
    </div>
  )
}

export default MenuMainLayout
