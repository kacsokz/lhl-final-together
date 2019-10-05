import React from 'react';

import "./app.scss";
import NavButton from "components/Navbar/NavButton";
import MapContainer from "components/Map/Map";
import queryString from 'query-string'
import NavBarFinal from "components/Navbar/NavBarFinal";

function App() {

  let parsed = queryString.parse(window.location.search)
  console.log(parsed)
  return (
    <div className="App">
      <main className="layout">
      <NavBarFinal></NavBarFinal>
    </main>
    </div>
  );
}

export default App;