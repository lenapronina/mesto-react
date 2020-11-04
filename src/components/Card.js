import React from 'react';

function Card({name, link, likes}){
  return (
    <li className="mesto-card">
      <img className="mesto-card__image" src={link} alt={name} />
      <button className="mesto-card__trash"></button>
      <div className="mesto-card__info">
        <h2 className="mesto-card__title">{name}</h2>
        <div className="mesto-card__like-group">
          <button className="mesto-card__like-icon"></button>
          <p className="mesto-card__like-number">{likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
