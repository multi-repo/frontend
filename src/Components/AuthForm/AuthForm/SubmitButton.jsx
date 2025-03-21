import React from 'react'

const SubmitButton = ({ isLoading }) => {
  const buttonText = isLoading ? 'Загрузка...' : 'Войти'
  return (
    <button type="submit" className="submitButton" disabled={isLoading}>
      {buttonText}
    </button>
  )
}

export default SubmitButton
