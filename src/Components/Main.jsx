import React, { Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'

// Ленивая загрузка компонентов
const MenuMainLayout = React.lazy(() => import('./Menu/Menu.jsx'))
const WhiteLayout = React.lazy(() => import('./WhiteForm/WhiteMain.jsx'))
const AuthLayout = React.lazy(() => import('./AuthForm/AuthMain'))
const AuthMain = React.lazy(() => import('./AuthForm/Auth'))

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Suspense fallback={<div>Загрузка...</div>}>
        {/* Компоненты будут загружаться лениво */}
        <AuthMain />
        <MenuMainLayout />
        <WhiteLayout />
      </Suspense>
    </div>
  )
}

export default MainLayout
