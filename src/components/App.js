import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState('');

  const [selectedCard, setSelectedCard]= React.useState(false);


  const [isLoading, setIsLoading] = React.useState(false);

  const [cards, setCards] = React.useState([]);


  const [values, setValues] = React.useState({
    addCard: {},
    editProfile: {},
    editAvatar: {}
  });
  const [errors, setErrors] = React.useState({
    addCard: {},
    editProfile: {},
    editAvatar: {}
  });

  function handleChange(event){

    setValues({ ...values,  [event.target.form.id]: { ...values[event.target.form.id],
      [event.target.name]: event.target.value,
    }

    });
    setErrors({...errors, [event.target.form.id]:{
      ...errors[event.target.form.id],
      [event.target.name]: event.target.validationMessage}
    });
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    //Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);

    });
  }

  function handleCardDelete(card){
    api.deleteCard(card._id).then(()=>{
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
  }

  React.useEffect(() => {
    // run Loader
    setIsLoading(true);
    //fetch profile and cards data
    api.getInitialCards()
      .then((initialCardsList) => {

        setCards(initialCardsList.map((card)=>({
          _id: card._id,
          owner: card.owner,
          name: card.name,
          link: card.link,
          likes: card.likes
        })));
        // stop Loader
        setIsLoading(false);
      })
      .catch((err)=> console.log(err));
  }, []);

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
    setIsLoading(true);

    api.patchUpdatedUserInfo(e)
      .then((updatedUserData)=> {
        setCurrentUser(updatedUserData);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  const handleUpdateAvatar=(e)=>{
    setIsLoading(true);
    api.patchUserAvatar(e)
      .then((updatedUserAvatar)=> {
        setCurrentUser(updatedUserAvatar);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  const handleAddPlaceSubmit = (e) => {
    setIsLoading(true);
    api.postNewCard(e)
      .then((newCard)=>{
        setCards([newCard, ...cards]);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  const handleCardClick = (e) => {
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

  const closeClickOverlayPopups = (e)=>{
    if(e.target === e.currentTarget){
      closeAllPopups()
    }
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          isLoading={isLoading}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          onOverlayClick={closeClickOverlayPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onOverlayClick={closeClickOverlayPopups}
          onUpdateUser={handleUpdateUser}
          values={values}
          errors={errors}
          setValues={setValues}
          setErrors={setErrors}
          handleChange={handleChange}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onOverlayClick={closeClickOverlayPopups}
          onUpdateAvatar={handleUpdateAvatar}
          values={values}
          errors={errors}
          setValues={setValues}
          setErrors={setErrors}
          handleChange={handleChange}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          onOverlayClick={closeClickOverlayPopups}
          values={values}
          errors={errors}
          setValues={setValues}
          setErrors={setErrors}
          handleChange={handleChange}
          isLoading={isLoading}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
