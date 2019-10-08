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
const VIEWLOCALEVENT = 'VIEWLOCALEVENT'

export default function App() {
  const { mode, transition } = useVisualMode(MAINVIEW);
  const {
    state,
    getUserById
  } = useApplicationData();

  const [userId, setId] = React.useState("");
  useEffect(() => {
    let id = localStorage.getItem("together::user_id");
    if (!id) {
      id = queryString.parse(window.location.search).user_id
      localStorage.setItem("together::user_id", id)
    }
    if (id) {
      window.history.replaceState({},"", "/");
      setId(id)
      getUserById(id)
    }
  }, []);

  const viewProfile = () => {
    transition(PROFILEVIEW)

  }

  const logout = () => {
    localStorage.removeItem("together::user_id")
    setId();
  }


  return (
    <main className="frame">

      {/* Nav Section */}
      <section className="frame__navbar">
        <NavBarFinal action={viewProfile} userId={userId} logout={logout}/>
      </section>

      {/* Map Section */}
      <section className="frame__map">
      {/* <div className="left-side"> */}
        <Map bars={state.allBars}/>
      </section>
      
      {/* Card Section */}
      <section className="frame__card">
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
            />
          </div>
        )}
      </section>
      
    </main>
  );
}
