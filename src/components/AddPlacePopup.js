import React from 'react';
import PopupWithForm from './PopupWithForm';


//import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Input from './Input';

function AddPlacePopup({isOpen, onClose, onAddPlace}){


  const [placeName, setPlaceName] = React.useState('');
  const [placeUrl, setPlaceUrl] = React.useState('');

  function handleSubmit(e) {

    e.preventDefault();

    onAddPlace({
      name: placeName,
      link: placeUrl,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      formName="form-addcard"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__field">
          <Input
            name="name"
            value={placeName|| ''}
            placeholder="Название"
            type="text"
            minLength="1"
            maxLength="30"
            handleChange={setPlaceName}
          />
          <span className="popup__input-error" id="place-name-error"></span>
        </div>
        <div className="popup__field">
          <Input
            name="link"
            value={placeUrl|| ''}
            placeholder="Ссылка на картинку"
            type="url"
            handleChange={setPlaceUrl}
          />
          <span className="popup__input-error" id="place-image-error"></span>
        </div>
        <button className="popup__submit-button" type="submit">Создать</button>
      </>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
