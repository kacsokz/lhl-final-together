import './app.scss';
import React        from 'react';
import NavBarFinal  from 'components/Navbar/NavBarFinal';
import Map          from 'components/Map/Map';
import Event        from 'components/Event/';
import User         from 'components/User';


export default function App() {
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
