import React from 'react';

function ImagePopup({card, onClose}){

  const popupOpened = card ? 'popup_opened' : ''

  return(
    <div className={`popup popup_image-viewer ${popupOpened}`}>
      <div className="popup__container popup__container_type_image">
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button className="popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;
