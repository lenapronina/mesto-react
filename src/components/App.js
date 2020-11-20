import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeleteCardPopup from './DeleteCardPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AddPlacePopup from './AddPlacePopup';

function App() {

  // set useState for CurrentUserContext
  const [currentUser, setCurrentUser] = React.useState('');

  // useStates for manage popups opening
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);

  // states for updating  card by click card for delete and show in image viewer
  const [selectedCard, setSelectedCard]= React.useState(false);
  const [card, setCard] = React.useState({});

  // states for updating card list
  const [cards, setCards] = React.useState([]);

  // states for updating and styling loading proccess
  const [isLoading, setIsLoading] = React.useState(false);

  // states for collecting all forms values and validation errors
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
    // check if card has already have a like
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        //create new cardList replacing liked/disliked card
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards)
      })
      .catch((err)=> console.log(err));
  }

  function handleCardDelete(card){
    setIsLoading(true);

    api.deleteCard(card._id)
      .then(()=>{
        //create new cardList removing card with certain id
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  function handleUpdateUser(e){
    setIsLoading(true);

    api.patchUpdatedUserInfo(e)
      .then((updatedUserData)=> {
        // update user info avatar with new data
        setCurrentUser(updatedUserData);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  function handleUpdateAvatar(e){
    setIsLoading(true);
    api.patchUserAvatar(e)
      .then((updatedUserAvatar)=> {
        // update user avatar with new data
        setCurrentUser(updatedUserAvatar);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  function handleAddPlaceSubmit(e){
    setIsLoading(true);
    api.postNewCard(e)
      .then((newCard)=>{
        // add new card to card list
        setCards([newCard, ...cards]);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err)=> console.log(err));
  }

  function handleCardClick(e){
    setSelectedCard(e);
  }

  //open popups
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  }

  function handleDeleteButtonClick(card){
    setDeleteCardPopupOpen(true);
    setCard(card);
  }

  //close popups
  function closeAllPopups(){
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard(false);
  }

  // close popup by clicking on overlay
  function closeClickOverlayPopups(e){
    if(e.target === e.currentTarget){
      closeAllPopups();
    }
  }

  return (
    //Add proveider to all components
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
          onDeleteButtonClick={handleDeleteButtonClick}
          isLoading={isLoading}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          onOverlayClick={closeClickOverlayPopups}
        />
        <DeleteCardPopup
          card={card}
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onOverlayClick={closeClickOverlayPopups}
          onCardDelete={handleCardDelete}
          isLoading={isLoading}
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
