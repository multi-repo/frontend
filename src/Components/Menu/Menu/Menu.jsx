import React, { useState } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="menu">
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
      <Link to="/section3-option6" className="menu__link">
        Option 6
      </Link>
    </div>
  )
}

export default MenuList
