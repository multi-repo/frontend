import React, { useState } from 'react';
import AuthLayout from './AuthForm/AuthMain';

const MainLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app">
      {!isAuthenticated && <AuthLayout onAuthenticate={handleAuthentication} />}

      {isAuthenticated && <h1>Добро edasdпожаловать!</h1>}
    </div>
  );
};

export default MainLayout;
