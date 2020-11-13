import React from 'react';
import api from '../utils/api';
import Card from './Card';

import Loader from 'react-loader-spinner';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}){

  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const[isLoading, setIsLoading] =React.useState(false);

  React.useEffect(() => {
    // run Loader
    setIsLoading(true);
    //fetch profile and cards data
    api.getAllInitialData()
      .then((data) => {
        const [ initialCardsList, userProfileData] = data;
        //update data with server response
        setUserAvatar(userProfileData.avatar);
        setUserName(userProfileData.name);
        setUserDescription(userProfileData.about);

        setCards(initialCardsList.map((card)=>({
          id: card._id,
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
        <div className="profile__avatar" onClick={onEditAvatar} style={isLoading?{backgroundColor: `#cccccc`}:{ backgroundImage: `url(${userAvatar})` }} ></div>
        <div className="profile__info">
          <h1  className="profile__title">{isLoading? 'User' : userName}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} />
          <p className="profile__subtitle">{isLoading? 'Description': userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} />
      </section>
      <section className="mesto-collection main__mesto-collection">
        <ul className="mesto-cards">
          { isLoading
            ? <Loader type="ThreeDots" color="#ffffff" height={60} width={60} style={{ margin: 'auto'}} />
            : cards.map((card)=> <Card card={card} key={card.id} onCardClick={onCardClick}/>) }
        </ul>
      </section>
    </main>
  );
}

export default Main;
