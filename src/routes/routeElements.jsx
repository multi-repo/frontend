// src/routes/routeElements.jsx
import React from 'react'

// Отдельные ленивые импорты
export const WhiteFormPage = React.lazy(
  () => import('../Components/WhiteForm/WhiteForm.jsx')
)
export const AuthPage = React.lazy(
  () => import('../Components/AuthForm/AuthMain.jsx')
)
export const AuthLayout = React.lazy(
  () => import('../Components/AuthForm/AuthMain.jsx')
)
export const HomePage = React.lazy(() => import('../layouts/HomeLayout.jsx'))

// (по желанию) Можно оставить общий объект, если будет удобно
export const ROUTE_ELEMENTS = {
  HOME: HomePage,
  WHITE: WhiteFormPage,
  AUTH: AuthPage,
  AUTH_MAIN: AuthLayout,
}
