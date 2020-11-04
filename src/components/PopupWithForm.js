import React from 'react';

function PopupWithForm({title, formName, isOpen, onClose, children}){
  return(
    <div className={ isOpen ? `popup popup_type_${formName} popup_opened` : `popup popup_type_${formName}`}>
      <div className="popup__container">
        <div className="popup__header">
          <h2 className="popup__title">{title}</h2>
          <button className="popup__close-button" onClick={onClose}></button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default PopupWithForm;
