import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../store/Auth/index.js'
import './styles/index.scss'

const AuthForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: true,
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

    dispatch(loginUser(username, password, remember))
    setFormData({ username: '', password: '', remember: true })
    usernameRef.current.focus()
  }

  return (
    <div className="AuthFormC">
      <div className="AuthFormImg">
        <form className="authForm" onSubmit={handleSubmit}>
          <h2>Авторизация</h2>
          {statusError && <p className="error">{errorMessage}</p>}
          <div className="formGroup">
            <label htmlFor="username" className="form__label">
              Имя пользователя
            </label>
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
            <label htmlFor="password" className="form__label">
              Пароль
            </label>
            <input
              className="formInput"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите пароль"
            />
            <label className="form__label__forgot-pass">Forgot password?</label>
          </div>
          <div className="formGroup">
            <div className="rmmberC">
              <label htmlFor="remember" className="form__label">
                Запомнить меня
              </label>
              <div className="rmmberCC">
                <input
                  className="rmbrChck"
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="submitButton"
              disabled={statusLoading}
            >
              {statusLoading ? 'Загрузка...' : 'Войти'}
            </button>
          </div>

          <div className="OAuth-Icons">
            <a
              className="google__oauth__icon"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2875/2875404.png"
                alt="Sign in with Google"
                className="google-icon"
              />
            </a>
            <a
              className="github__oauth__icon"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="Sign in with Github"
                className="github-icon"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
