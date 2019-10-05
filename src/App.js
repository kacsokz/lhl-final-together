import './app.scss';
import React        from 'react';
import queryString  from 'query-string'
import NavBarFinal  from 'components/Navbar/NavBarFinal';
import Map          from 'components/Map/Map';
import Event        from 'components/Event/';
import User         from 'components/User';

export default function App() {

  let parsed = queryString.parse(window.location.search)
  console.log(parsed)

  return (
    <div className="App">
      <main className="layout">
        <NavBarFinal />
        <Map />
        <Event /> 
        {/* <User /> */}
      </main>
    </div>
  );
};
