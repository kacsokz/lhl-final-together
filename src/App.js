import React from 'react';

import './App.css';
import "./app.scss";
import NavButton from "components/Navbar/NavButton";
import MapContainer from "components/Map/Map";
import queryString from 'query-string'

function App() {

  let parsed = queryString.parse(window.location.search)
  console.log(parsed)
  return (
    <div className="App">
      
      <main className="layout">
      <section className="topbar">
          <img
            className="topbar__together"
            src="images/togetherLogo.png"
            alt="Together"
          />
          <NavButton confirm>Register</NavButton>
          <NavButton confirm>Sign In</NavButton>
      </section>
    </main>
    </div>
  );
}

export default App;