import React from 'react';
import escapeKeyCode from '../utils/utils';

function ImagePopup({card, onClose, onOverlayClick}){

  const popupOpened = card ? 'popup_opened' : ''

  function handleKeyDown(event){
    if(card && event.keyCode === escapeKeyCode){
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
    <div className={`popup popup_image-viewer ${popupOpened}`} onClick={onOverlayClick}>
      <div className="popup__container popup__container_type_image">
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button className="popup__close-button" onClick={onClose} />
      </div>
    </div>
  )
}

export default ImagePopup;
