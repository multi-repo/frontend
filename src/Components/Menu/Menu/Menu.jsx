import React, { useState } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import AuthButtonTrigger from '../AuthBtn/AuthBtn'
import AuthIcon from '../AuthIcon/AuthIcon'
import ThemeSwitcher from '../ThemeSwitcher/Swithcer'
import { useSelector } from 'react-redux'

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const theme = useSelector((state) => state.theme.theme)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuPaths = [
    { path: '/auth', label: 'Section 1: Option 1' },
    { path: '/option2', label: 'Option 2' },
    { path: '/section2-option3', label: 'Section 2: Option 3' },
    { path: '/section2-option4', label: 'Option 4' },
  ]

  return (
    <div className={`menu menu__styles__${theme}`}>
      <button className="menu__toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      <div className={`menu__links ${isOpen ? 'menu__links--open' : ''}`}>
        <div className="menu__leftc">
          {menuPaths.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`menu__link menu__link__styles__${theme}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="menu__rightc">
        <ThemeSwitcher />
        <div className="menu__auth-button">
          <AuthButtonTrigger />

          <AuthIcon />
        </div>
      </div>
    </div>
  )
}

export default MenuList
