import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick}){

  const currentUserData = React.useContext(CurrentUserContext);

  const isOwn = (card.owner._id === currentUserData._id);

  const cardDeleteButtonClassName = (
    `mesto-card__trash ${isOwn ? '' : 'mesto-card__trash_hidden'}`
  );


  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="mesto-card">
      <img className="mesto-card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} />
      <div className="mesto-card__info">
        <h2 className="mesto-card__title">{card.name}</h2>
        <div className="mesto-card__like-group">
          <button className="mesto-card__like-icon" />
          <p className="mesto-card__like-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
