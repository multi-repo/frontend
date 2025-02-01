import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenuLayout from './Menu/MenuMain.jsx'
import './Menu.scss'

const MenuMainLayout = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MenuLayout />
          </>
        }
      />
    </Routes>
  )
}

export default MenuMainLayout
