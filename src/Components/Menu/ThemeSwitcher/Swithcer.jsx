import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SwitcherTheme from './ThemeSwitcher/Switcher.jsx' // Исправлен импорт

const ThemeSwitcher = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SwitcherTheme />
          </>
        }
      />
    </Routes>
  )
}

export default ThemeSwitcher
