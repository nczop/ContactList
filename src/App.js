import React from 'react';
import './App.css';


  function App() {
    return (
      <div>
        <AppHeader/>
        <main className="ui main text container">
          <ContactsList />
        </main>
      </div>
    );
  }
  
  function AppHeader () {
    return (    
      <header className="ui fixed menu">  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>  
        <nav class="ui container">
          <a href="#" class="header item">
            <img class="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
            Lista kontaktów
          </a>
          <div class="header item">
            <button class="ui button">Dodaj</button>
          </div>
        </nav>
      </header>
    );
  }
  
  function ContactsList() {
    return (
      <ul className="ui relaxed divided list selection">
        <ContactItem
          login="typeofweb1"
          name="Lena"
          department="JavaScript Developer"
        />
        <ContactItem
          login="typeofweb2"
          name="Brian"
          department="Human Resources"
        />
        <ContactItem
          login="typeofweb3"
          name="Rick"
          department="QA"
        />
      </ul>
    );
  }
  
  function ContactItem({ login, name, department }) {
    const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
    return (
      <li className="item">
        <img src={imgUrl} className="ui mini rounded image" />
        <div className="content">
          <h4 className="header">{name}</h4>
          <div className="description">{department}</div>
        </div>
      </li>
    );
  }   

export default App;
