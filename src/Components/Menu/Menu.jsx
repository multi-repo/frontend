import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { checkAuthStatus } from '../../store/Auth'
import AuthLayout from '../AuthForm/AuthMain'
import MenuLayout from './Menu/MenuMain.jsx'

const MenuMainLayout = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route
          path="/"
          element={
            <>
              <MenuLayout />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default MenuMainLayout
