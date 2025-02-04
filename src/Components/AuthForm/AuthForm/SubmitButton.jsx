import React from 'react'

const SubmitButton = ({ isLoading }) => {
  return (
    <button type="submit" className="submitButton" disabled={isLoading}>
      {isLoading ? 'Загрузка...' : 'Войти'}
    </button>
  )
}

export default SubmitButton
