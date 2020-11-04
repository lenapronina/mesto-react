import React from 'react';

function Main(){

  const handleEditAvatarClick = () => {
    const avatarUpdatePopup = document.querySelector('.popup_avatar-update');
    avatarUpdatePopup.classList.add('popup_opened');
  }

  const handleEditProfileClick = () => {
    const profileEditPopup = document.querySelector('.popup_profile-edit');
    profileEditPopup.classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    const cardAddPopup = document.querySelector('.popup_add-card');
    cardAddPopup.classList.add('popup_opened');
  }

  return(
    <main className="main page__main">
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
        <div className="profile__info">
          <h1  className="profile__title">Жак</h1>
          <button className="profile__edit-button" onClick={handleEditProfileClick}></button>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="mesto-collection main__mesto-collection">
        <ul className="mesto-cards"></ul>
      </section>
      <div className="popup popup_profile-edit">
        <div className="popup__container">
          <div className="popup__header">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button className="popup__close-button"></button>
          </div>
          <form className="popup__form" id="form-edit" name="form-edit" method="POST" action="#" noValidate>
            <div className="popup__field">
              <input className="popup__input" name="name" id="name" placeholder="Введите имя" type="text" minLength="2" maxLength="40" required />
              <span className="popup__input-error" id="name-error"></span>
            </div>
            <div className="popup__field">
              <input className="popup__input" name="job" id="job" placeholder="Введите род занятий" type="text" minLength="2" maxLength="200" required />
              <span className="popup__input-error" id="job-error"></span>
            </div>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_add-card">
      <div className="popup__container">
          <div className="popup__header">
            <h2 className="popup__title">Новое место</h2>
            <button className="popup__close-button"></button>
          </div>
          <form className="popup__form" id="form-addcard" name="form-addcard" method="POST" action="#" noValidate>
            <div className="popup__field">
              <input className="popup__input" name="name" id="place-name" placeholder="Название" type="text" minLength="1" maxLength="30" required />
              <span className="popup__input-error" id="place-name-error"></span>
            </div>
            <div className="popup__field">
              <input className="popup__input" name="link" id="place-image" placeholder="Ссылка на картинку" type="url" required />
              <span className="popup__input-error" id="place-image-error"></span>
            </div>
            <button className="popup__submit-button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_avatar-update">
        <div className="popup__container popup__container_type_avatar-update">
          <div className="popup__header">
            <h2 className="popup__title">Обновить аватар</h2>
            <button className="popup__close-button"></button>
          </div>
          <form className="popup__form" id="form-editavatar" name="form-editavatar" method="POST" action="#" noValidate>
            <div className="popup__field">
              <input className="popup__input" name="avatar" id="avatar" placeholder="Название" type="url" required />
              <span className="popup__input-error" id="avatar-error"></span>
            </div>
            <button className="popup__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_submit-action">
        <div className="popup__container popup__container_type_submit-action">
          <div className="popup__header">
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__close-button"></button>
          </div>
          <button className="popup__submit-button popup__submit-button_type_action" type="submit">Да</button>
        </div>
      </div>
      <div className="popup popup_image-viewer">
        <div className="popup__container popup__container_type_image">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button className="popup__close-button"></button>
        </div>
      </div>
      <div className="popup popup_load-failure">
        <div className="popup__container">
          <div className="popup__header">
            <h2 className="popup__title">Сервер нам почему-то не отвечает😢</h2>
          </div>
          <p className="popup__paragraph">Попробуйте перезагрузить страницу</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
