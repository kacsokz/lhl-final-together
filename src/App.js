import './app.scss';
import React, { useEffect } from 'react';
import queryString from 'query-string'
import NavBarFinal from 'components/Navbar/NavBarFinal';
import Map from 'components/Map/Map';
import Event from 'components/Event/';
import List from 'components/Common/EventList';
import useVisualMode from './hooks/useVisualMode';
import User from 'components/User/index';
import axios from "axios";
import { useApplicationData } from "./hooks/useApplicationData";
import { set } from 'date-fns';
import { getAllBars } from "./helpers/selecters";


const MAINVIEW = 'MAINVIEW';
const PROFILEVIEW = 'PROFILEVIEW';
const VIEWLOCALEVENT = 'VIEWLOCALEVENT'


export default function App() {
  let id = queryString.parse(window.location.search).user_id
  const { mode, transition } = useVisualMode(MAINVIEW);
  const {
    state,
    getUserById
  } = useApplicationData();
  // console.log(state)

  const [userId, setId] = React.useState('');

  useEffect(() => {
    setId(id)
    getUserById(id)
  }, []);
  // console.log(state)

  const hostingEvents = [
    {
      id: 1,
      event_name: 'Graduation & Celebration Drinks',
      bar_name: 'The Last Best Brewing Company',
      date: 'Oct. 10, 2019',
      start_time: '20:00',
      end_time: '23:00',
      attendees: 18,
    },
    {
      id: 2,
      event_name: 'Halloween Costume Showdown',
      bar_name: 'Greta Bar',
      date: 'Oct. 31, 2019',
      start_time: '16:00',
      end_time: '17:00',
      attendees: 18,
    },
    {
      id: 3,
      event_name: 'Pixels & Pints 10th Anniversary',
      bar_name: 'Hudsons Canadas Pub',
      date: 'Nov. 7, 2019',
      start_time: '17:00',
      end_time: '21:00',
      attendees: 18,
    },
    {
      id: 4,
      event_name: 'Holiday Party',
      bar_name: 'El Furniture Warehouse',
      date: 'Dec. 7, 2019',
      start_time: '15:00',
      end_time: '16:00',
      attendees: 18,
    },
    {
      id: 5,
      event_name: 'KVs NY PBs',
      bar_name: 'Craft Beer Market',
      date: 'Jan. 1, 2019',
      start_time: '16:00',
      end_time: '17:00',
      attendees: 18,
    }
  ];

  const attendingEvents = [
    {
      id: 1,
      event_name: 'Graduation & Celebration Drinks',
      bar_name: 'The Last Best Brewing Company',
      date: 'Oct. 10, 2019',
      start_time: '20:00',
      end_time: '23:00',
      attendees: 18,
    },
    {
      id: 2,
      event_name: 'Halloween Costume Showdown',
      bar_name: 'Greta Bar',
      date: 'Oct. 31, 2019',
      start_time: '16:00',
      end_time: '17:00',
      attendees: 18,
    },
  ];

  const selectLocalEvent = (event_id) => {
    // getEventSelecter(event_id)
    // .then(transition(VIEWLOCALEVENT))
    console.log('hello')

  }

  return (
    <div className="App">
      <main className="layout">
        <NavBarFinal />
        <div className="main-container">
          {mode === MAINVIEW && (
            <div className="right-side">
              {state.allEvents.length > 0
                ? (<List message={'LOCAL'}
                  localEvents={state.allEvents}
                />)
                : 'Loading...'}
            </div>
          )}

          {mode === PROFILEVIEW && (
            <div className="right-side">
              <User
                key={userId}
                id={userId}
                name={state.userInfo.name}
                email={state.user.email}
                tag_line={state.userInfo.tag_line}
                avatar={state.userInfo.avatar}
                updateProfile={'from application passed from useApplicationData'}
                hostingEvents={hostingEvents}
                attendingEvents={attendingEvents}
                hostingMessage="HOSTING"
                getEventById='function to display single event'
                attendingMessage="Attending"
              />
            </div>
          )}

          <div className="left-side">
            <Map bars={state.allBars}/>
          </div>
        </div>
      </main>
    </div>
  );
}
