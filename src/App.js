import './app.scss';
import React from 'react';
import queryString from 'query-string'
import NavBarFinal from 'components/Navbar/NavBarFinal';
import Map from 'components/Map/Map';
import Event from 'components/Event/';
import List from 'components/Common/EventList';
// import User         from 'components/User';

// import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";
// import { useApplicationData } from "../hooks/useApplicationData";

export default function App() {

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

  let parsed = queryString.parse(window.location.search)
  console.log(parsed)

  return (
    <div className="App">
      <main className="layout">
        <NavBarFinal />
        <Map />
        <List
          message="LOCAL"
          events={events}
        />
        <Event />
        {/* <User /> */}
      </main>
    </div>
  );
};
