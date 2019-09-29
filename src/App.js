import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./app.scss";
import Event from "components/User/eventsList";

function App() {
  return (
    <div className="App">
      
      <main className="layout">
      <section className="topbar">
          <img
            className="topbar__together"
            src="images/togetherLogo.png"
            alt="Together"
          />
      </section>
    </main>
    <Event></Event>
    </div>
  );
}

export default App;
