import React from 'react';

function Input({name, value, type, placeholder, handleChange}, ...props){

  // function handleInputChange(evt){
  //   props.handleChange(evt.target.value)
  // }

  return (
    <input
      className="popup__input"
      name={name}
      ref={props.ref}
      value={value}
      placeholder={placeholder}
      type={type}
      minLength={props.minLength}
      maxLength={props.maxLength}
      onChange={(e)=>handleChange(e.target.value)}
      required
    />
  )
}

export default Input;
