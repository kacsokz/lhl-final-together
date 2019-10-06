import './app.scss';
import React from 'react';
import queryString from 'query-string'
import NavBarFinal from 'components/Navbar/NavBarFinal';
import Map from 'components/Map/Map';
import Event from 'components/Event/';
import List from 'components/Common/EventList';
import useVisualMode from './hooks/useVisualMode';
import User from 'components/User/index';
import axios from "axios";
// import User         from 'components/User';

// import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";
import { useApplicationData } from "./hooks/useApplicationData";

const MAINVIEW = 'MAINVIEW';
const PROFILEVIEW = 'PROFILEVIEW';

export default function App() {
  let id = queryString.parse(window.location.search)
  // const username = window.location.search.replace("?user_id=", "")
  const { mode, transition } = useVisualMode(MAINVIEW);

  const [userId, setId] = React.useState(id.user_id);

  let userInfo = [
    {
      id: id,
      name: "Kat Connolly",
      email: "k.connolly@nomail.com",
      tag_line: "Software Engineer with a Flair for Design",
      avatar: "https://media.licdn.com/dms/image/C5603AQFUiMn0YgEGvQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=pfCRLAtRZ0Pj6HlofNazjfwg-oEuH3mxf1TTM1gStgQ"
    }
  ]

  const events = [
    {
      event_name: 'Graduation & Celebration Drinks',
      bar_name: 'The Last Best Brewing Company',
      date: 'Oct. 10, 2019',
      start_time: '20:00',
      end_time: '23:00',
      attendees: 18,
    },
    {
      event_name: 'Halloween Costume Showdown',
      bar_name: 'Greta Bar',
      date: 'Oct. 31, 2019',
      start_time: '16:00',
      end_time: '17:00',
      attendees: 18,
    },
    {
      event_name: 'Pixels & Pints 10th Anniversary',
      bar_name: 'Hudsons Canadas Pub',
      date: 'Nov. 7, 2019',
      start_time: '17:00',
      end_time: '21:00',
      attendees: 18,
    },
    {
      event_name: 'Holiday Party',
      bar_name: 'El Furniture Warehouse',
      date: 'Dec. 7, 2019',
      start_time: '15:00',
      end_time: '16:00',
      attendees: 18,
    },
    {
      event_name: 'KVs NY PBs',
      bar_name: 'Craft Beer Market',
      date: 'Jan. 1, 2019',
      start_time: '16:00',
      end_time: '17:00',
      attendees: 18,
    }
  ];

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

  // const {
  //   state,
  //   setDay,
  //   bookInterview,
  //   cancelInterview,
  //   editInterview
  // } = useApplicationData();

  // const appointments = getAppointmentsForDay(state, state.day)
  // const appointmentsList = appointments.map((appointment) => {
  //   const interview = getInterview(state, appointment.interview);
  //   const interviewersForDay = getInterviewersForDay(state, state.day)

  return (
    <div className="App">
      <main className="layout">
        <NavBarFinal />
        <div class="main-container">
          {mode === MAINVIEW && (
            <div className="right-side">
              <Event />
            </div>
          )}

          {mode === PROFILEVIEW && (
            <div className="right-side">
              <User
                key={userId}
                id={userId}
                name={userInfo[0].name}
                email={userInfo[0].email}
                tag_line={userInfo[0].tag_line}
                avatar={userInfo[0].avatar}
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
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}
