import React from 'react';
import PopupWithForm from './PopupWithForm';


import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Input from './Input';

function EditProfilePopup({isOpen, onClose, onChange, onUpdateUser}){


  const currentUserData = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');


  React.useEffect(() => {
    setName(currentUserData.name);
    setDescription(currentUserData.about);
  }, [currentUserData]);


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      formName="form-edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__field">
          <Input
            name="name"
            value={name|| ''}
            placeholder="Введите имя"
            type="text"
            minLength="2"
            maxLength="40"
            handleChange={setName}
          />
          <span className="popup__input-error" id="name-error"></span>
        </div>
        <div className="popup__field">
          <Input
            name="job"
            value={description|| ''}
            placeholder="Введите род занятий"
            type="text"
            minLength="2"
            maxLength="200"
            handleChange={setDescription}
          />
          <span className="popup__input-error" id="job-error"></span>
        </div>
        <button className="popup__submit-button" type="submit">Сохранить</button>
      </>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
