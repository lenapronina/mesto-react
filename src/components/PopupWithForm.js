import React from 'react';

function PopupWithForm({title, formName, isOpen, onClose, onSubmit, children}){

  const popupOpened = isOpen ? 'popup_opened' : ''

  return(
    <div className={`popup popup_type_${formName} ${popupOpened}`}>
      <div className="popup__container">
        <div className="popup__header">
          <h2 className="popup__title">{title}</h2>
          <button className="popup__close-button" onClick={onClose}></button>
        </div>
        <form
          className="popup__form"
          id={formName}
          name={formName}
          onSubmit={onSubmit}
          method="POST"
          action="#"
          noValidate
        >
          {children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
