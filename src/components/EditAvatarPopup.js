import React from 'react';

import PopupWithForm from './PopupWithForm';
import PopupButton from './PopupButton';
import escapeKeyCode from '../utils/utils';

function EditAvatarPopup({
    isOpen,
    onClose,
    onUpdateAvatar,
    onOverlayClick,
    values,
    errors,
    setValues,
    setErrors,
    handleChange,
    isLoading })
  {

    const avatarRef = React.useRef(null);

    //state for validation form
    const [isActive, setIsActive]=React.useState(false);

    // inputs count in this popup
    const inputListLength = 1;

    React.useEffect(() => {

      const formValues =  Array.from(Object.values(values.editAvatar));
      const formErrors = Array.from(Object.values(errors.editAvatar));
      //set isActive state true for all filled inputs without errors
      if(formErrors.every(elem => elem === "") && formValues.length === inputListLength) {
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
      onClose();
      setValues({ ...values,  editAvatar: {}});
      setErrors({...errors, editAvatar:{}});
    }

    function handleKeyDown(event){
      if(isOpen && event.keyCode ===escapeKeyCode){
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
      <PopupWithForm
        title="Обновить аватар"
        formName="editAvatar"
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onOverlayClick={onOverlayClick}
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
            text={isLoading? "Сохранение..." : "Сохранить"}
            type="submit"
            isActive={isActive}
            isLoading={isLoading}
          />
        </>
      </PopupWithForm>
    )
}

export default EditAvatarPopup;
