import React from 'react';
import Profile from 'components/User/Profile';
import EventsList from 'components/User/eventsList';
// import UserView from 'components/User/index';

export default {
  title: 'User',
};

let events = [
  { id: "1", name: "EventName1", start_time: "15:00", end_time: "16:40", happyHourName: 'something1' },
  { id: "2", name: "EventName2", start_time: "15:00", end_time: "16:40", happyHourName: 'something2' },
  { id: "3", name: "EventName3", start_time: "15:00", end_time: "16:40", happyHourName: 'something3' },
  { id: "3", name: "EventName3", start_time: "15:00", end_time: "16:40", happyHourName: 'something4' },
  { id: "3", name: "EventName3", start_time: "15:00", end_time: "16:40", happyHourName: 'something5' }
]

export const profile = () =>
  <Profile
    name="Kat Connolly"
    email="k.connolly@nomail.com"
    tag_line="Software Engineer with a Flair for Design"
  />

export const event = () =>
  <EventsList
    events={events}
    // user={user}
  />

// export const user_view = () =>
//   <UserView
//     user={user}
//     events={events}>
//   </UserView>;