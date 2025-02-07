import React from 'react'
import './styles/main.scss'
import MainLayout from './Components/Main'
import { useSelector } from 'react-redux'

const App = () => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div
      className={`app ${theme === 'light' ? 'app__styles__light' : 'app__styles__dark'}`}
    >
      <MainLayout />
    </div>
  )
}

export default App
