import React from 'react'
import './styles/main.scss'
import MainLayout from './Components/Main'
import { useSelector } from 'react-redux'

const App = () => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={`app app__styles__${theme}`}>
      <MainLayout />
    </div>
  )
}

export default App
