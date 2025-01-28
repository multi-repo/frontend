import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenuLayout from './Menu/MenuMain.jsx'
import './Menu.scss'

const MenuMainLayout = () => {
  return (
    <div className="menuC">
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
    </div>
  )
}

export default MenuMainLayout
