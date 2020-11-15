import React from 'react';

import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Input from './Input';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){

  let avatarRef = React.useRef('');

  function handleInputChange(evt) {
    avatarRef = evt
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef
    });
  }

  return(
    <PopupWithForm
      title="Обновить аватар"
      formName="form-editavatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__field">
          <Input
            name="avatar"
            value={avatarRef.current.value}
            placeholder="Название"
            type="url"
            handleChange={handleInputChange}
          />
          <span className="popup__input-error" id="avatar-error"></span>
        </div>
        <button className="popup__submit-button" type="submit">Сохранить</button>
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
