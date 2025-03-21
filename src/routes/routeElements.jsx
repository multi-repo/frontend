import React from 'react'

export const HOME_ELEMENT = React.lazy(
  () => import('../layouts/HomeLayout.jsx')
)
export const WHITE_ELEMENT = React.lazy(
  () => import('../Components/WhiteForm/WhiteForm.jsx')
)
export const AUTH_LAYOUT = React.lazy(
  () => import('../Components/AuthForm/AuthMain.jsx')
)
