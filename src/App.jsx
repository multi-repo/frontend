// src/App.jsx
import React from 'react';
import './styles/main.scss'; // Импортируем SCSS файл
import AuthForm from './Components/AuthForm/AuthForm';

const App = () => {
  return (
    <div className="app">
      <AuthForm />
    </div>
  );
};

export default App;
