import './app.scss';
import React, { useEffect } from 'react';
import queryString from 'query-string'
import NavBarFinal from 'components/Navbar/NavBarFinal';
import Map from 'components/Map/Map';
import Event from 'components/Event/';
import useVisualMode from './hooks/useVisualMode';
import User from 'components/User/index';
import { useApplicationData } from "./hooks/useApplicationData";


const MAINVIEW = 'MAINVIEW';
const PROFILEVIEW = 'PROFILEVIEW';
const VIEWLOCALEVENT = 'VIEWLOCALEVENT';

export default function App() {
  const { mode, transition } = useVisualMode(MAINVIEW);
  const {
    state,
    getUserById
  } = useApplicationData();

  const [userId, setId] = React.useState("");
  useEffect(() => {
    let id = localStorage.getItem("together::user_id");
    
    if (!id && queryString.parse(window.location.search).user_id !== null
    && queryString.parse(window.location.search).user_id !== undefined) {
      id = queryString.parse(window.location.search).user_id
      localStorage.setItem("together::user_id", id)
    }
    if (id !== null) {
      window.history.replaceState({},"", "/");
      setId(id)
      getUserById(id)
    }
  }, []);

  const viewProfile = () => {
    transition(PROFILEVIEW)

  }

  const logout = () => {
    transition(MAINVIEW)
    localStorage.removeItem("together::user_id")
    setId();
  }


  const homeView = () => {
    transition(MAINVIEW)
  };


  return (
    <main className="wrapper">

      {/* Nav Section */}
      <section className="wrapper__navbar">
        <NavBarFinal action={viewProfile} userId={userId} logout={logout} homeView={homeView}/>
      </section>

      {/* Map Section */}
      <article className="wrapper__map">
        <Map bars={state.allBars} />
      </article>
      
      {/* Card Section */}
      <article className="wrapper__card">
        {mode === MAINVIEW && (
          <div>
              {state.allEvents.length > 0
              ? (<Event localEvents={state.allEvents}></Event>)
              : 'Loading...'}
          </div>
        )}

        {mode === PROFILEVIEW && state.userInfo && (
          <div>
            <User
              key={state.userInfo.id}
              id={state.userInfo.id}
              name={`${state.userInfo.first_name} ${state.userInfo.last_name}`}
              email={state.userInfo.email}
              tag_line={state.userInfo.tag_line}
              avatar={state.userInfo.avatar}
              updateProfile={'from application passed from useApplicationData'}
              hostingMessage="HOSTING"
              getEventById='function to display single event'
              attendingMessage="Attending"
              event={state.event}
              userId={userId}
            />
          </div>
        )}
      </article>
      
    </main>
  );
}
