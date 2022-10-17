import React, { useState } from "react"

const RadioButton = ({ label, value, handleChange }) => {
  return (
    <div>
      <label>
        <input type="radio" value={value} onChange={handleChange} />
        {label}
      </label>
    </div>
  )
}

export default RadioButton
