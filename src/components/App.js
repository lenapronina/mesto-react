import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState('');

  const [selectedCard, setSelectedCard]= React.useState(false);


  React.useEffect(() => {

    //fetch profile and cards data
    api.getUserInfo()
      .then((userProfileData) => {

        //update data with server response
        setCurrentUser(userProfileData);
      })
      .catch((err)=> console.log(err));
  }, []);

  const handleUpdateUser=(e)=>{


    api.patchUpdatedUserInfo(e)
      .then((updatedUserData)=> {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  const handleUpdateAvatar=(e)=>{
    api.patchUserAvatar(e)
      .then((updatedUserAvatar)=> {
        setCurrentUser(updatedUserAvatar);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  const handleCardClick=(e)=>{
    setSelectedCard(e);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        {/* <PopupWithForm
          title="Обновить аватар"
          formName="avatar-update"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={(
            <form className="popup__form" id="form-editavatar" name="form-editavatar" method="POST" action="#" noValidate>
              <div className="popup__field">
                <input
                  className="popup__input"
                  name="avatar"
                  id="avatar"
                  placeholder="Название"
                  type="url"
                  required
                />
                <span className="popup__input-error" id="avatar-error"></span>
              </div>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
          )}
        /> */}
        {/* <PopupWithForm
          title="Новое место"
          formName="add-card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={(
            <form className="popup__form" id="form-addcard" name="form-addcard" method="POST" action="#" noValidate>
              <div className="popup__field">
                <input
                  className="popup__input"
                  name="name"
                  id="place-name"
                  placeholder="Название"
                  type="text"
                  minLength="1"
                  maxLength="30"
                  required
                />
                <span className="popup__input-error" id="place-name-error"></span>
              </div>
              <div className="popup__field">
                <input
                  className="popup__input"
                  name="link"
                  id="place-image"
                  placeholder="Ссылка на картинку"
                  type="url"
                  required
                />
                <span className="popup__input-error" id="place-image-error"></span>
              </div>
              <button className="popup__submit-button" type="submit">Создать</button>
            </form>
          )}
        /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
