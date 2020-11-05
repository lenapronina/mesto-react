import React from 'react';

function Card({card, onCardClick}){

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="mesto-card">
      <img className="mesto-card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className="mesto-card__trash"></button>
      <div className="mesto-card__info">
        <h2 className="mesto-card__title">{card.name}</h2>
        <div className="mesto-card__like-group">
          <button className="mesto-card__like-icon"></button>
          <p className="mesto-card__like-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
