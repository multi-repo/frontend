import React, { Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes/routes.jsx'

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default MainLayout
