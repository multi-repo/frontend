import React from 'react'

const CheckboxField = ({ label, name, checked, onChange }) => {
  return (
    <div className="formGroup">
      <div className="rmmberC">
        <label htmlFor={name} className="formGroup__label">
          {label}
        </label>
        <div className="rmmberCC">
          <input
            className="rmbrChck"
            type="checkbox"
            id={name}
            name={name}
            checked={checked}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckboxField
