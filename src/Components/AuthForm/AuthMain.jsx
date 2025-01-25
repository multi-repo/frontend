// src/Components/AuthForm/AuthMain.jsx
import React, { useState } from 'react';
import AuthForm from './AuthForm/AuthForm';
import './AuthMain.scss';

const AuthLayout = ({ onAuthenticate }) => {
  const [isAuthPage, setIsAuthPage] = useState(true);

  const handleAuthentication = () => {
    setIsAuthPage(false);
    onAuthenticate(); // Уведомляем родительский компонент о том, что аутентификация прошла
  };

  return (
    <div className="main-layout auth-page">
      {isAuthPage ? (
        <AuthForm onAuthenticate={handleAuthentication} />
      ) : (
        <div>
          <h1>Добро пожаловать!</h1>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
