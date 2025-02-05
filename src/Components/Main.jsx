import React, { Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import SliderLayout from './MainSlider/Slider'

// Ленивая загрузка компонентов
const MenuMainLayout = React.lazy(() => import('./Menu/Menu.jsx'))
const WhiteLayout = React.lazy(() => import('./WhiteForm/WhiteMain.jsx'))
const AuthLayout = React.lazy(() => import('./AuthForm/AuthMain'))
const AuthMain = React.lazy(() => import('./AuthForm/Auth'))

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Suspense fallback={<div>Загрузка...</div>}>
        <AuthMain />
        <MenuMainLayout />
        <SliderLayout />
      </Suspense>
    </div>
  )
}

export default MainLayout
