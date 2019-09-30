import React from 'react';
import Profile from 'components/User/profile';
import EventsList from 'components/User/eventsList';

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
  <Profile></Profile>;

export const event = () =>
  <EventsList
    events={events}
  >
  </EventsList>;