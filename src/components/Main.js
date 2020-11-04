import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar}){

  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAllInitialData()
      .then((data) => {
        const [ initialCardsList, userProfileData] = data;
        setUserAvatar(userProfileData.avatar);
        setUserName(userProfileData.name);
        setUserDescription(userProfileData.about);

        setCards(initialCardsList.map((card)=>({
          id: card._id,
          name: card.name,
          link: card.link,
          likes: card.likes.length
        })))
      })
  });

  return(
    <main className="main page__main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} ></div>
        <div className="profile__info">
          <h1  className="profile__title">{userName}</h1>
          <button className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="mesto-collection main__mesto-collection">
        <ul className="mesto-cards">
          {
            cards.map(({id, ...props})=> <Card {...props} key={id} />)
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
