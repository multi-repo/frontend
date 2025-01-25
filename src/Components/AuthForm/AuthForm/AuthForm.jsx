import React, { useState, useEffect, useRef, useCallback } from 'react'
import './AuthForm.scss'

const AuthForm = ({ onAuthenticate }) => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.username || !formData.password) {
      setError('Пожалуйста, заполните все поля!')
      if (!formData.username) usernameRef.current.focus()
      return
    }
    setError('')
    console.log('Логин:', formData.username, 'Пароль:', formData.password)
    setSuccessMessage('Авторизация успешна!')
    onAuthenticate()
    setFormData({ username: '', password: '' })
    usernameRef.current.focus()
  }

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <div className="formGroup">
        <label htmlFor="username">Имя пользователя</label>
        <input
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
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Введите пароль"
        />
      </div>
      <button type="submit" className="submitButton">
        Войти
      </button>
    </form>
  )
}

export default AuthForm
