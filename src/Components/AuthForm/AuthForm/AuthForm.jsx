import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux' // Import Redux hooks
import { loginUser } from '../../../store/authSlice.js' // Import the login action
import './styles/index.scss'

const AuthForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  })
  const { statusLoading, errorMessage, statusError } = useSelector(
    (state) => state.auth
  )
  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, remember } = formData

    if (!username || !password) {
      alert('Пожалуйста, заполните все поля!')
      if (!username) usernameRef.current.focus()
      return
    }

    // Dispatch the login action with the remember field included
    dispatch(loginUser(username, password, remember))

    setFormData({ username: '', password: '', remember: true })
    usernameRef.current.focus()
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      {statusError && <p className="error">{errorMessage}</p>}
      <div className="formGroup">
        <label htmlFor="username">Имя пользователя</label>
        <input
          className="formInput"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Введите имя пользователя"
          ref={usernameRef}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Пароль</label>
        <input
          className="formInput"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Введите пароль"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="remember">Запомнить меня</label>
        <input
          className="formInput"
          type="checkbox"
          id="remember"
          name="remember"
          checked={formData.remember}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submitButton" disabled={statusLoading}>
        {statusLoading ? 'Загрузка...' : 'Войти'}
      </button>
    </form>
  )
}

export default AuthForm
