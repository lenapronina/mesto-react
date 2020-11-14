import React from 'react';

function Input({name, value, type, placeholder, handleChange}, ...props){

  function handleInputChange(evt){
    handleChange(evt.target.value)
  }

  return (
    <input
      className="popup__input"
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      minLength={props.minLength}
      maxLength={props.maxLength}
      onChange={handleInputChange}
      required
    />
  )
}

export default Input;
