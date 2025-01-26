import React, { useState } from 'react'
import './styles/index.scss'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown__button">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          <div className="dropdown__section">
            <h4 className="dropdown__section-title">Section 1</h4>
            <ul className="dropdown__list">
              <li className="dropdown__item">Option 1</li>
              <li className="dropdown__item">Option 2</li>
            </ul>
          </div>
          <div className="dropdown__section">
            <h4 className="dropdown__section-title">Section 2</h4>
            <ul className="dropdown__list">
              <li className="dropdown__item">Option 3</li>
              <li className="dropdown__item">Option 4</li>
            </ul>
          </div>
          <div className="dropdown__section">
            <h4 className="dropdown__section-title">Section 3</h4>
            <ul className="dropdown__list">
              <li className="dropdown__item">Option 5</li>
              <li className="dropdown__item">Option 6</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
