import React from 'react';
import Card from './Card';

import Loader from 'react-loader-spinner';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onDeleteButtonClick, isLoading}){

  const currentUserData = React.useContext(CurrentUserContext);

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
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onDeleteButtonClick={onDeleteButtonClick}
            />)
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
