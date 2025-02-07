import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../store/Auth/index.js'
import InputField from './InputField'
import CheckboxField from './CheckboxField'
import OAuthButtons from './OAuthButtons'
import SubmitButton from './SubmitButton'
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
          <div className="formGroup">
            <h2>Авторизация</h2>
            {statusError && <p className="error">{errorMessage}</p>}
          </div>

          <div className="formGroup">
            <InputField
              label="Имя пользователя"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Введите имя пользователя"
              ref={usernameRef}
            />
          </div>

          <div className="formGroup">
            <InputField
              label="Пароль"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите пароль"
            />
            <label className="formGroup__forgot-pass">Forgot password?</label>
          </div>

          <div className="formGroup">
            <CheckboxField
              label="Запомнить меня"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <SubmitButton isLoading={statusLoading} />
          </div>
          <div className="formGroup">
            <OAuthButtons />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm
