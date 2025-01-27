// src/Components/Menu/MenuMain.jsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkAuthStatus } from '../../store/Auth/index.js'
import AuthLayout from '../AuthForm/AuthMain'
import DropdownMenu from './Menu/Menu.jsx'
import AuthButtonTrigger from '../AuthBtn/AuthBtn.jsx'
import './MenuMain.scss'

const MenuLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  return (
    <div className="MenuLayout">
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route
          path="/"
          element={
            <>
              <DropdownMenu />
              <AuthButtonTrigger />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default MenuLayout
