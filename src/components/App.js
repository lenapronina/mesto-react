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

  const handleAddPlaceSubmit =(e)=>{
    api.postNewCard(e)
      .then((newCard)=>{
        setCards([newCard, ...cards]);
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          isLoading={isLoading}
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
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
