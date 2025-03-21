// src/Components/Menu/MenuMain.jsx
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkAuthStatus } from '../../../store/Auth/index.js'
import './MenuMain.scss'
import MenuList from './Menu.jsx'

const MenuLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  return (
    <div className="MenuLayout">
      <MenuList />
    </div>
  )
}

export default MenuLayout
