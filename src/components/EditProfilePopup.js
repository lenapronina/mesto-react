import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupButton from './PopupButton';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser, values, setValues, errors, setErrors, handleChange, isLoading}){


  const currentUserData = React.useContext(CurrentUserContext);

  const [isActive, setIsActive]=React.useState(false);

  React.useEffect(() => {

    setValues({ ...values,  editProfile: { ...values.editProfile,
      user: currentUserData.name,
      job:currentUserData.about
    }});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserData]);

  React.useEffect(() => {
    const arrEditProfileValues = Array.from(Object.values(values.editProfile));
    const arrEditProfileErrors = Array.from(Object.values(errors.editProfile))

    if (arrEditProfileErrors.every(elem => elem === "") && arrEditProfileValues.length !== 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

  }, [errors, values]);

  function handleSubmitForm(e) {

    e.preventDefault();

    onUpdateUser({
      name: values.editProfile.user,
      about: values.editProfile.job,
    });

    setValues({ ...values,  editProfile: {}});
    setErrors({...errors, editProfile:{}});
  }

  function handleClose(){
    onClose()
    setValues({ ...values,  editProfile: { ...values.editProfile,
      user: currentUserData.name,
      job:currentUserData.about
    }});
    setErrors({...errors, editProfile:{}});
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      formName="editProfile"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmitForm}
    >
      <>
        <div className="popup__field">
          <input
            className={(isActive ||  values.editProfile.user !== 0)? "popup__input" : "popup__input popup__input_type_error"}
            name="user"
            value={values.editProfile.user|| ''}
            placeholder="Введите имя"
            type="text"
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            required
          />
          {errors.editProfile.user && (
            <span className="popup__input-error popup__input-error_active">{errors.editProfile.user}</span>
          )}
        </div>
        <div className="popup__field">
          <input
            className={(isActive || values.editProfile.job !== 0 )? "popup__input" : "popup__input popup__input_type_error"}
            name="job"
            value={values.editProfile.job|| ''}
            placeholder="Введите род занятий"
            type="text"
            minLength="2"
            maxLength="200"
            onChange={handleChange}
            required
          />
          {errors.editProfile.job && (
            <span className="popup__input-error popup__input-error_active">{errors.editProfile.job}</span>
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

export default EditProfilePopup;
