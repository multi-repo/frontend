import React from 'react'
import './WhiteMain.scss'
import WhiteForm from './WhiteFrom/WhiteForm'
import { Route, Routes } from 'react-router-dom'

const WhiteLayout = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <WhiteForm />
          </>
        }
      />
    </Routes>
  )
}

export default WhiteLayout
