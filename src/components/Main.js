import React from 'react';
import api from '../utils/api';
import Card from './Card';

import Loader from 'react-loader-spinner';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}){

  const currentUserData = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUserData._id);

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

  return(
    <main className="main page__main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={isLoading?{backgroundColor: `#cccccc`}:{ backgroundImage: `url(${currentUserData.avatar})` }} ></div>
        <div className="profile__info">
          <h1  className="profile__title">{isLoading? 'User' : currentUserData.name}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__subtitle">{isLoading? 'Description':  currentUserData.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="mesto-collection main__mesto-collection">
        <ul className="mesto-cards">
          { isLoading
            ? <Loader type="ThreeDots" color="#ffffff" height={60} width={60} style={{ margin: 'auto'}} />
            : cards.map((card)=>
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />)
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
