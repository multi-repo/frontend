// src/App.jsx
import React from 'react'
import './styles/main.scss' // Импортируем SCSS файл
import MainLayout from './Components/Main'

const App = () => {
  return (
    <div className="app">
      <MainLayout />
    </div>
  )
}

export default App
