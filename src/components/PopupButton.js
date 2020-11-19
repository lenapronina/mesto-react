import React from 'react';

function PopupButton({className, text, type, isActive, isLoading}){
  return(
    <button
      className={isActive || isLoading ? className : `${className} ${className}_disabled` }
      type={type}
      disabled={isActive? false : true}
    >{text}</button>
  )
}

export default PopupButton;
