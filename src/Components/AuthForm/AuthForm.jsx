import React, { useState } from 'react';
import './AuthForm.scss';

const AuthForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Пожалуйста, заполните все поля!');
      return;
    }
    setError('');
    console.log('Логин:', formData.username, 'Пароль:', formData.password);
    alert('Авторизация успешна!');
  };

  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      {error && <p className="error">{error}</p>}
      <div className="formGroup">
        <label htmlFor="username">Имя пользователя</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Введите имя пользователя"
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
  );
};

export default AuthForm;
