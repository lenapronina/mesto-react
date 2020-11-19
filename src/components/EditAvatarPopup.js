import React from 'react';

import PopupWithForm from './PopupWithForm';
import PopupButton from './PopupButton';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, values, setValues, errors, setErrors, handleChange, isLoading}){

  const avatarRef = React.useRef(null);

  const [isActive, setIsActive]=React.useState(false);

  React.useEffect(() => {

    const arrEditAvatarValues = Array.from(Object.values(values.editAvatar));
    const arrEditAvatarErrors = Array.from(Object.values(errors.editAvatar))

    if (arrEditAvatarErrors.every(elem => elem === "") && arrEditAvatarValues.length !== 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

  }, [errors, values]);


  const handleSubmit = (e) => {

    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });

    setValues({ ...values,  editAvatar: {}});
    setErrors({...errors, editAvatar:{}});
  }

  function handleClose(){
    onClose()
    setValues({ ...values,  editAvatar: {}});
    setErrors({...errors, editAvatar:{}});
  }


  return(
    <PopupWithForm
      title="Обновить аватар"
      formName="editAvatar"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__field">
          <input
            className={(isActive || values.editAvatar.avatar === ''|| values.editAvatar.avatar === undefined)? "popup__input" : "popup__input popup__input_type_error"}
            name="avatar"
            ref={avatarRef}
            value={values.editAvatar.avatar || ''}
            placeholder="Ссылка на картинку"
            type="url"
            onChange={handleChange}
            required
          />
          {errors.editAvatar.avatar && (
            <span className="popup__input-error popup__input-error_active">{errors.editAvatar.avatar}</span>
          )}
        </div>
        <PopupButton
          className="popup__submit-button"
          text={isLoading? "Сохранение" : "Сохранить"}
          type="submit"
          isActive={isActive}
          isLoading={isLoading}
        />
      </>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
