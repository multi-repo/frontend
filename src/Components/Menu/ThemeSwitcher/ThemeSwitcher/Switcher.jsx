import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncSwitchTheme } from '../../../../store/Theme/index.js'
import './styles/index.scss'

const SwitcherTheme = () => {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(asyncSwitchTheme())
  }

  return (
    <div className="switcher">
      <div className="switcher__container">
        <div
          role="switch"
          aria-label="Toggle Theme"
          aria-checked={theme === 'dark'}
          tabIndex="0"
          onClick={handleClick}
          className={`switcher__container ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}
        >
          <div className="switcher__container__slider" />
        </div>
      </div>
    </div>
  )
}

export default SwitcherTheme
