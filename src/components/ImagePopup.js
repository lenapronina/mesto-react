import React from 'react';

function ImagePopup(){
  return(
    <div className="popup popup_image-viewer">
      <div className="popup__container popup__container_type_image">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
        <button className="popup__close-button"></button>
      </div>
    </div>
  )
}

export default ImagePopup;
