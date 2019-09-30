import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./app.scss";
import Event from "components/User/eventsList";
import NavButton from "components/Navbar/NavButton";

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
          <NavButton confirm>Register</NavButton>
          <NavButton confirm>Sign In</NavButton>
      </section>
    </main>
    <Event></Event>
    </div>
  );
}

export default App;


// import React from "react";
// import "./App.scss";
// ​
// function Topbar() {
//   return (
    
//   );
// }
// ​
// export default Topbar;
