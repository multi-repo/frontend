import React, { useState } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import AuthButtonTrigger from '../AuthBtn/AuthBtn'
import AuthIcon from '../AuthIcon/AuthIcon'

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="menu">
      <button className="menu__toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      <div className={`menu__links ${isOpen ? 'menu__links--open' : ''}`}>
        <div className="menu__leftc">
          {' '}
          <Link to="/auth" className="menu__link">
            Section 1: Option 1
          </Link>
          <Link to="/option2" className="menu__link">
            Option 2
          </Link>
          <Link to="/section2-option3" className="menu__link">
            Section 2: Option 3
          </Link>
          <Link to="/section2-option4" className="menu__link">
            Option 4
          </Link>
          <Link to="/section3-option5" className="menu__link">
            Section 3: Option 5
          </Link>
        </div>
      </div>
      <div className="menu__rightc">
        <div className="menu__auth-button">
          <AuthButtonTrigger />
          <AuthIcon />
        </div>
      </div>
    </div>
  )
}

export default MenuList
