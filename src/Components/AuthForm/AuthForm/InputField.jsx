import React, { forwardRef } from 'react'

const InputField = forwardRef(
  ({ label, type, name, value, onChange, placeholder }, ref) => {
    return (
      <>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          className="formInput"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
        />
      </>
    )
  }
)

export default InputField
