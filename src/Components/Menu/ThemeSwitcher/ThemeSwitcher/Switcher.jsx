import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncSwitchTheme } from '../../../../store/Theme/index.js'
import './styles/index.scss'

const SwitcherTheme = () => {
  const theme = useSelector((state) => state.theme.theme) // Получаем тему из Redux (redux-persist уже восстанавливает значение)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(asyncSwitchTheme()) // Переключаем тему
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  return (
    <div className="switcher">
      <div
        role="switch"
        aria-label="Toggle Theme"
        aria-checked={theme === 'dark'}
        tabIndex="0"
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        className={`switcher__container ${theme === 'dark' ? 'dark-mode' : ''}`}
      >
        <div className="switcher__container__slider" />
      </div>
    </div>
  )
}

export default SwitcherTheme
