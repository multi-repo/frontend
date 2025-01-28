import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../AuthForm/AuthMain'

const AuthMain = () => {
  return (
    <div className="AuthC">
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </div>
  )
}

export default AuthMain
