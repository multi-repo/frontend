import React, { useState } from 'react'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={toggleMenu} style={buttonStyle}>
        Menu
      </button>
      {isOpen && (
        <ul style={menuStyle}>
          <li style={menuItemStyle}>Option 1</li>
          <li style={menuItemStyle}>Option 2</li>
          <li style={menuItemStyle}>Option 3</li>
        </ul>
      )}
    </div>
  )
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
}

const menuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '150px',
}

const menuItemStyle = {
  padding: '10px',
  cursor: 'pointer',
}

export default DropdownMenu
