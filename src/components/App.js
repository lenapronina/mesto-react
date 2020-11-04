import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>


  <template className="mesto-template">
    <li className="mesto-card">
      <img className="mesto-card__image" src="#" alt="#" />
      <button className="mesto-card__trash"></button>
      <div className="mesto-card__info">
        <h2 className="mesto-card__title"></h2>
        <div className="mesto-card__like-group">
          <button className="mesto-card__like-icon"></button>
          <p className="mesto-card__like-number"></p>
        </div>
      </div>
    </li>
  </template>




    </div>
  );
}

export default App;
