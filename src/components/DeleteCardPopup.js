import React from 'react';
import escapeKeyCode from '../utils/utils';

function DeleteCardPopup({
    isOpen,
    onClose,
    onOverlayClick,
    onCardDelete,
    isLoading,
    card
  })
  {

    const popupOpened = isOpen ? 'popup_opened' : '';

    function handleCardDelete() {
      onCardDelete(card);
    }

    function handleKeyDown(event){
      if(isOpen && event.keyCode === escapeKeyCode){
        onClose();
      }
    };

    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    });

    return(
      <div className={`popup popup_submit-action ${popupOpened}`} onClick={onOverlayClick}>
        <div className="popup__container popup__container_type_submit-action">
          <div className="popup__header">
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__close-button"></button>
          </div>
          <button
            className="popup__submit-button popup__submit-button_type_action"
            onClick={handleCardDelete}>
             {isLoading? 'Удаляем...' : 'Да'} </button>
        </div>
      </div>
    )
}

export default DeleteCardPopup;
