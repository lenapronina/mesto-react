import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onDeleteButtonClick}){

  const currentUserData = React.useContext(CurrentUserContext);

  const isOwn = (card.owner._id === currentUserData._id);

  const cardDeleteButtonClassName = (
    `mesto-card__trash ${isOwn ? '' : 'mesto-card__trash_hidden'}`
  );


  const isLiked = card.likes.some(i => i._id === currentUserData._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `mesto-card__like-icon ${isLiked ? 'mesto-card__like-icon_active' : ''}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLike() {
    onCardLike(card);
  }

  function clickI(){
    onDeleteButtonClick(card)
  }

  return (
    <li className="mesto-card">
      <img className="mesto-card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} onClick={clickI}/>
      <div className="mesto-card__info">
        <h2 className="mesto-card__title">{card.name}</h2>
        <div className="mesto-card__like-group">
          <button className={cardLikeButtonClassName} onClick={handleLike} />
          <p className="mesto-card__like-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
